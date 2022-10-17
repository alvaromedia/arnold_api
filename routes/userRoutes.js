const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  profile,
  updateUser,
  deleteUser,
  addToFavorites,
  removeFromFavorites,
} = require('../controllers/userControllers');

router.post('/', registerUser);
router.post('/login', loginUser);

router.get('/:id', profile);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// SUB routes for favorite movies
router.post('/:id/movies/:movieID', addToFavorites);
router.delete('/:id/movies/:movieID', removeFromFavorites);

module.exports = router;
