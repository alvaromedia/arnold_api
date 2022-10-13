const User = require('../models/userModel');

/**
 * @desc register a new user
 * @route /api/users
 * @access public
 */
const registerUser = async (req, res) => {
  const user = await User.findOne({ name: req.body.name });

  if (user) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const newUser = await User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  });

  res.status(201).json(newUser);
};

module.exports = { registerUser };
