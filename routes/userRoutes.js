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

const protect = require('../middleware/auth');

router.post('/', registerUser);
router.post('/login', loginUser);

// protected routes
router.get('/:id', protect, profile);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

// SUB routes for favorite movies
router.post('/:id/movies/:movieID', protect, addToFavorites);
router.delete('/:id/movies/:movieID', protect, removeFromFavorites);

module.exports = router;
