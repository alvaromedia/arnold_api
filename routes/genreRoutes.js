const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'global genre routes' });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: 'single genre page', id: id });
});

module.exports = router;
