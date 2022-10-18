const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');

const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS
app.use(cors());

// Create a write stream
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {
  flags: 'a',
});
// Setup the logger
app.use(morgan('common', { stream: accessLogStream }));

// serve static files
app.use(express.static('public', { extensions: ['html'] }));

// homepage route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Alrighty, this is the main page' });
});

// Movie routes
const movieRoutes = require('./routes/movieRoutes');
app.use('/api/movies', movieRoutes);

// user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// director routes
const directorRoutes = require('./routes/directorRoutes');
app.use('/api/directors', directorRoutes);

// genre routes
const genreRoutes = require('./routes/genreRoutes');
app.use('/api/genres', genreRoutes);

// Error handler middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Connect to database
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected ${connection.connection.host}`);

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
