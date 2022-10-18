const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth'); // todo: implement middleware later

const {
  getAllMovies,
  findMovie,
} = require('../controllers/movieController.js');

router.get('/', getAllMovies);

router.get('/:id', findMovie);

module.exports = router;
