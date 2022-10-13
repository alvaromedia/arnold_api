const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  findMovie,
  deleteMovie,
} = require('../controllers/movieController.js');

router.get('/', getAllMovies);

router.get('/:id', findMovie);

module.exports = router;
