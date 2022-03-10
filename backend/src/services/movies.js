const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/movieData.json')))

async function all(req, res) {
	return res.json(data)
}

async function filterById(movies, id) {
  const filtered = movies.filter(movie => {
    if(movie.id === id) return movie
  })
  console.log(filtered)
  return filtered
}

async function filterByTitle(movies, title) {
  const filtered = movies.filter(movie => {
    if(movie.originalTitle.toLowerCase().includes(title.toLowerCase())) return movie
  })
  console.log({filtered})
  return filtered
}

async function filter(req, res) {
  const search = req.params.search;
  const IsSearchById = !isNaN(search);
  let result = null;

  if (IsSearchById){
    result = await filterById(data.movies, search);
  }else{
    result = await filterByTitle(data.movies, search);
  }

  return res.json(result)
}

async function create(req, res){
  const movie = req.body;
  
  data.movies.push({
    "tconst": data.movies.length + 1,
    ...movie
  });

  fs.writeFileSync(path.join(__dirname,'../data/movieData.json'), JSON.stringify(data, null, 4));

  return res.json({status: 'ok'});
}
module.exports = {
  all,
  filter,
  create,
}