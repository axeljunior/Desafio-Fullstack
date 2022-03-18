const express = require('express')
const router = express.Router()
const movies = require('./services/movies')

router.get('/', movies.movies)
router.post('/create', movies.create)

module.exports = router
