const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bio: {
    type: String,
  },
  birth: {
    type: Date,
  },
  death: {
    type: Date,
  },
});

module.exports = mongoose.model('Director', directorSchema);
