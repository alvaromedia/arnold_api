const express = require('express');
const router = express.Router();

const {
  getAllMovies,
  addMovie,
  findMovie,
  deleteMovie,
} = require('../controllers/movieController.js');

router.get('/', getAllMovies);
router.post('/', addMovie);

router.get('/:id', findMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
