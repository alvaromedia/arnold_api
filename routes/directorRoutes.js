const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'this should be the main directors page' });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: 'single director info', id: id });
});

module.exports = router;
