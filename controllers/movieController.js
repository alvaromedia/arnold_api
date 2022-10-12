const movies = require('../movies.js');
const { v4: uuidv4 } = require('uuid');

/**
 * @desc get all movies
 * @route GET /movies
 * @access public (for now)
 */
const getAllMovies = (req, res, next) => {
  res.status(200).json(movies);
};

/**
 * @desc create a movie
 * @route POST /movies
 * @access public (for now)
 */
const createMovie = (req, res) => {
  const post = { id: uuidv4(), ...req.body };
  res.json(post);
};

module.exports = { getAllMovies, createMovie };
