const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  // firstly we hash the password before storing it in the database
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    // create the user in the database
    const newUser = await User.create({
      name: req.body.name,
      password: hashedPassword, // we save the hashed password
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
const loginUser = async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.status(400).json({ error: 'User does not exist' });
    // throw new Error('User does not exist');
  }

  try {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      { payload_id: user._id },
      process.env.JWT_SECRET_TOKEN,
      {
        expiresIn: '7d',
      }
    );

    res.json({ message: 'Logged in successfully', user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @desc get user's profile
 * @route GET /api/users/:id
 * @access private
 */
const profile = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
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
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      },
      { new: true }
    );
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
