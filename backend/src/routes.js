const express = require('express');
const data = require('./filmes.json')
const router = express.Router();

router.get('/movies', async (req, res) => {
  return res.json(data);
});

module.exports = router;
