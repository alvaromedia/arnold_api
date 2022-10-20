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
    ref: 'Genre',
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
  },
  actors: {
    type: [{ type: String }],
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
