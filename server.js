const express = require('express');
const app = express();
const morgan = require('morgan');

const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a write stream
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {
  flags: 'a',
});
// Setup the logger
app.use(morgan('common', { stream: accessLogStream }));

// serve static files
app.use(express.static('public', { extensions: ['html'] }));

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
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
