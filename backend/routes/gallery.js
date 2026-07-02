const express = require('express');
const GalleryItem = require('../models/GalleryItem');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await GalleryItem.find().sort({ order: 1, createdAt: -1 });
    res.json(items);
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const item = await GalleryItem.create(req.body);
    res.status(201).json(item);
  } catch (err) { next(err); }
});

module.exports = router;
