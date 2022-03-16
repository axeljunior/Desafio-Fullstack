const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://axeljunior:semsenha@cluster0.ack1z.mongodb.net/teste-bonaparte?retryWrites=true&w=majority"
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

async function all(req, res) {
  console.log(req.params)
  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")
  const movies = await collection.find().limit(21).toArray()
  // const movies = await collection.find().skip(3).limit(3).toArray()
  await client.close()

  return await res.json(movies)
}

async function filterById(id) {
  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")
  const movies = await collection.find({ tconst: id }).toArray()
  await client.close()

  return movies
}

async function filterByTitle(title) {
  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")
  const movies = await collection
    .find({ originalTitle: {$regex: title} })
    .toArray()
  await client.close()

  return movies
}

async function filter(req, res) {
  console.log(req.params.page,req.params.search)
  const search = req.params.search
  
  const IsSearchById = !isNaN(search)
  let result = null

  if (IsSearchById) {
    result = await filterById(search)
  } else {
    result = await filterByTitle(search)
  }

  return res.json(result)
}

async function create(req, res) {
  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")
  await collection.insertOne(req.body)
  await client.close()

  return res.json({ status: "ok" })
}
module.exports = {
  all,
  filter,
  create,
  client
}
