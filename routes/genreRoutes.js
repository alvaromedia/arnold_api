const express = require('express');
const router = express.Router();

const Genres = require('../models/genreModel');

router.get('/', async (req, res) => {
  const allGenres = await Genres.find({});
  res.status(200).json(allGenres);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const singleGenre = await Genres.findOne({ _id: id });
  res.status(200).json(singleGenre);
});

module.exports = router;
