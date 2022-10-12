const { v4: uuidv4 } = require('uuid');

const movies = [
  { title: 'Movie 1' },
  { title: 'Harry Potter' },
  { title: 'Caperucita roja' },
  { title: 'Some wonderful story' },
  { title: 'Fish in the yellow sea' },
];

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
const addMovie = (req, res) => {
  const newMovie = { id: uuidv4(), ...req.body };
  movies.push(newMovie);
  res.json(newMovie);
};

/**
 * @desc find a single movie by ID
 * @route /movies/:id
 * @access public (for now)
 */
const findMovie = (req, res) => {
  const { id } = req.params;
  const found = movies.find((movie) => movie.title === id);
  res.json(found);
};

/**
 * @desc find a single movie by ID
 * @route /movies/:id
 * @access public (for now)
 */
const deleteMovie = (req, res) => {
  const { id } = req.params;
  const deletedMovie = movies.filter((movie) => movie.id === id);
  res.json(deletedMovie);
};

module.exports = { getAllMovies, addMovie, findMovie, deleteMovie };
