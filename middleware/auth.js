const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async (req, res, next) => {
  let token;

  console.log(req.headers);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header. We only need the string after 'Bearer'
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);

      // Get user from the token (because the token has the user id as payload)
      req.user = await User.findById(decoded.payload_id).select('-password');
      console.log(req.user); // todo check why is null

      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  if (!token) {
    res.status(404).json({ error: 'No token' });
  }
};

module.exports = protect;
