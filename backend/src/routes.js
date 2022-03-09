const express = require('express')
const data = require('./filmes.json')
const router = express.Router()

router.get('/', async (req, res) => {
	return res.json(data)
})

router.get('/:id', async (req, res) => {
	const filtered = data.movies.filter(movie => {
        if(movie.id === req.params.id) return movie
    })
    console.log(filtered)
	return res.json(filtered)
})

module.exports = router
