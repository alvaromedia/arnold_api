const User = require('../models/userModel');

/**
 * @desc register a new user
 * @route /api/users
 * @access public
 */
const registerUser = async (req, res) => {
  // check if the user already exists
  const user = await User.findOne({ name: req.body.name });
  if (user) {
    return res.status(400).json({ error: 'User already exists' });
  }

  try {
    // create the user in the database
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @desc login an existing user
 * @route /api/users/login
 * @access public
 */
const loginUser = (req, res) => {
  res.json({ message: 'hello there' });
};

/**
 * @desc get user's profile
 * @route GET /api/users/:id
 * @access private
 */
const profile = async (req, res) => {
  const { id } = req.params; // ! change later

  try {
    const user = await User.findOne({ name: id }); // ! change later
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @desc update user's info
 * @route PUT /api/users/:id
 * @access private
 */
const updateUser = async (req, res) => {
  const { id } = req.params; // ! change later

  try {
    const user = await User.findOne({ name: id }); // ! change later
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @desc delete a user
 * @route DELETE /api/users/:id
 * @access private
 */
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @desc add movie to favorites list
 * @route POST /api/users/movies/:id
 * @access private
 */
const addToFavorites = async (req, res) => {
  // logic here
  const { id, movieID } = req.params;

  const user = await User.findOneAndUpdate(
    { name: id },
    { $push: { favoriteMovies: movieID } }
  ); // ! change later

  res.status(200).json({ message: 'post to favorite movies', id, movieID });
};

/**
 * @desc remove movie from favorites list
 * @route DELETE /api/users/movies/:id
 * @access private
 */
const removeFromFavorites = async (req, res) => {
  // logic here
  const { id, movieID } = req.params;

  const user = await User.findOneAndUpdate(
    { name: id },
    { $pull: { favoriteMovies: movieID } }
  ); // ! change later

  res.status(200).json({ message: 'delete favorite movies', id, movieID });
};

module.exports = {
  registerUser,
  loginUser,
  profile,
  updateUser,
  deleteUser,
  addToFavorites,
  removeFromFavorites,
};
