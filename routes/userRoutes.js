const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  profile,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

const User = require('../models/userModel'); // ! delete later

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/:id', profile);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// SUB routes for favorite movies
router.post('/:id/movies/:movieID', async (req, res) => {
  // logic here
  const { id, movieID } = req.params;

  const user = await User.findOneAndUpdate(
    { name: id },
    { $push: { favoriteMovies: movieID } }
  ); // ! change later

  res.status(200).json({ message: 'post to favorite movies', id, movieID });
});

router.delete('/:id/movies/:movieID', async (req, res) => {
  // logic here
  const { id, movieID } = req.params;

  const user = await User.findOneAndUpdate(
    { name: id },
    { $pull: { favoriteMovies: movieID } }
  ); // ! change later

  res.status(200).json({ message: 'delete favorite movies', id, movieID });
});

module.exports = router;
