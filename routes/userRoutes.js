const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const newUser = req.body;
  res.json(newUser);
});

router.post('/login', (req, res) => {
  // check if user already exists
});

router.get('/:id', (req, res) => {
  // logic here
});

router.put('/:id', (req, res) => {
  // logic here
});

router.delete('/:id', (req, res) => {
  // logic here
});

// SUB routes for favorite movies
router.post('/:id/:movieID', (req, res) => {
  // logic here
  const { id, movieID } = req.params;
  res.status(200).json({ message: 'post to favourite movies', id, movieID });
});

router.delete('/:id/:movieID', (req, res) => {
  // logic here
  const { id, movieID } = req.params;
  res.status(200).json({ message: 'delete favourite movies', id, movieID });
});

module.exports = router;
