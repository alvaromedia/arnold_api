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
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
  },
  actors: {
    type: Array,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Movies', movieSchema);
