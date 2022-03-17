const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

async function consultDB(page, filter) {
  let movies = null
  let count = 0;

  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")

  if(page) {
    const currentPage = parseInt(page)
    if (filter) {
      movies = await collection
        .find(filter)
        .skip(21*(currentPage-1)).limit(21).toArray()
      count = await collection.countDocuments(filter)
    }else{
      movies = await collection.find().skip(21*(currentPage-1)).limit(21).toArray()
      count = await collection.countDocuments()
    }
  }else{
    if (filter){
      movies = await collection.find(filter).limit(21).toArray()
      count = await collection.countDocuments(filter)
    }else{
      movies = await collection.find().limit(21).toArray()
      count = await collection.countDocuments()
    }
  }

  await client.close()

  return { page: Math.ceil(count / 21), movies }
}

async function movies(req, res) {
  const { page, filter, type } = req.query;
  
  let reponse;
  switch(type){
    case 'id':
      reponse = await consultDB(page, { tconst: filter })
      break;
    case 'year':
      reponse = await consultDB(page, { year: filter })
      break;
    case 'title':
    default:
      if (filter){
        reponse = await consultDB(page, { 
          originalTitle: {
            $regex: filter.includes("$") ? filter : '^' + filter, 
            $options: 'i'
          } 
        })
      }
      else{
        reponse = await consultDB(page)
      }
      break;
  }
  return await res.json(reponse)
}

async function create(req, res) {
  await client.connect()

  const collection = client.db("teste-bonaparte").collection("movies")
  await collection.insertOne(req.body)
  await client.close()

  return res.json({ status: "ok" })
}

module.exports = {
  movies,
  create,
  client
}
