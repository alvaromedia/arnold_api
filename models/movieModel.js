const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genres',
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Directors',
  },
  actors: {
    type: [{ type: String }],
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
