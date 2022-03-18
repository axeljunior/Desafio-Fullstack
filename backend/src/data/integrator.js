const { ungzip } = require("node-gzip")
const cjson = require("csvtojson")
const fs = require("fs")
const path = require("path")
const { default: axios } = require("axios")
const { client } = require('../services/movies')

const downloads = [
  {
    url: "https://datasets.imdbws.com/title.basics.tsv.gz",
    zipName: "title.basics.tsv.gz",
    unzipName: "title.basics.tsv",
  },
  {
    url: "https://datasets.imdbws.com/title.ratings.tsv.gz",
    zipName: "title.ratings.tsv.gz",
    unzipName: "title.ratings.tsv",
  },
]

async function download() {
  for (let i = 0; i < downloads.length; i++) {
    const item = downloads[i]

    const writer = fs.createWriteStream(path.join(__dirname, item.zipName))
    const response = await axios.get(item.url, {
      responseType: "stream",
    })

    await new Promise((resolve, reject) => {
      response.data.pipe(writer)
      let error = null
      writer.on("error", (err) => {
        error = err
        writer.close()
        reject(err)
      })
      writer.on("close", () => {
        if (!error) {
          resolve(true)
        }
      })
    })
    const bufferRatings = fs.readFileSync(path.join(__dirname, item.zipName))

    console.log("Descompactando arquivo ...")
    const unzipBuffer = await ungzip(bufferRatings)
    fs.writeFileSync(path.join(__dirname, item.unzipName), unzipBuffer)
    console.log("Descompactação realizada com sucesso!")
  }
}

async function load() {
  console.log("Baixando arquivos ...")
  await download()
  console.log("Download realizado com sucesso!")
  let finalResult = {
    movies: []
  }
  let filmes = []

  console.log("Carregando arquivo title.ratings.tsv ...")

  let ratingResult = await cjson({ delimiter: "\t" }).fromFile(
    path.join(__dirname, "title.ratings.tsv")
  )

  console.log("Carregamento realizado com sucesso!")
  console.log("Transformando dados ...")

  const fileStream = fs.createReadStream(
    path.join(__dirname, "title.basics.tsv")
  );

  await cjson({ delimiter: "\t" })
    .fromStream(fileStream)
    .subscribe((element, line) => {
      const filme = element
      const index = ratingResult.findIndex(
        (rating) => rating.tconst === filme.tconst
      )

      if (index !== -1) {
        filme.rating = ratingResult[index]
      }
      filmes.push(element)

      finalResult.movies = filmes
      process.stdout.write(`Linha atual: ${line} (total de aproximadamente 1500000)        \r`)
      if (filmes.length % 1000 === 0) {
        fs.writeFileSync(
          path.join(__dirname, "movieData.json"),
          JSON.stringify(finalResult, null, 4)
        )
      }
    })
  console.log("Transformação realizada com sucesso!")
  fs.writeFileSync(path.join(__dirname, "movieData.json"),
    JSON.stringify(finalResult, null, 4)
  )
}

async function save() {
  const movieData = fs.readFileSync(path.join(__dirname,'movieData.json'))
  
  const jsonData = JSON.parse(movieData)

  await client.connect()
  const collection = client.db("teste-bonaparte").collection("movies")

  console.log("Populando banco...")

  const quantityPerSlice = 50
  const quantityOfSlice = Math.ceil(jsonData.movies.length / quantityPerSlice)
  let start = 0
  let end = quantityPerSlice

  for(let i=0; i < quantityOfSlice; i++){
    const elements = jsonData.movies.slice(start, end)
    for (let j = 0; j < elements.length; j++) {
      const el = elements[j]

      await collection.updateOne(
        { tconst: el.tconst },
        { $set: el },
        {
          upsert: true,
        }
      );
    }
    // await collection.insertMany(jsonData.movies.slice(start,end))
    start += quantityPerSlice
    end += quantityPerSlice
  }
  
  console.log("Dados adicinados ao banco")
  await client.close()
  
}

async function integrate(){
  await load()
  await save()
}

module.exports = integrate;