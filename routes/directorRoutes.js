const express = require('express');
const router = express.Router();

const Directors = require('../models/directorModel');

router.get('/', async (req, res) => {
  const allDirectors = await Directors.find({});
  res.status(200).json(allDirectors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const singleDirector = await Directors.findOne({ _id: id });
  res.status(200).json(singleDirector);
});

module.exports = router;
