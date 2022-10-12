const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  createMovie,
} = require('../controllers/movieController.js');

router.get('/', getAllMovies);

router.post('/', createMovie);

module.exports = router;
