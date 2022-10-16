const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    birthday: {
      type: Date,
    },
    favoriteMovies: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movies' }],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
