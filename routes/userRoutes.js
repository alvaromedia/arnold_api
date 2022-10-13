const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userControllers');

router.post('/', registerUser);

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
  res.status(200).json({ message: 'post to favorite movies', id, movieID });
});

router.delete('/:id/:movieID', (req, res) => {
  // logic here
  const { id, movieID } = req.params;
  res.status(200).json({ message: 'delete favorite movies', id, movieID });
});

module.exports = router;
