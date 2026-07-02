const express = require('express');
const Testimonial = require('../models/Testimonial');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const items = await Testimonial.find().sort({ featured: -1, createdAt: -1 });
    res.json(items);
  } catch (err) { next(err); }
});

router.post('/', async (req, res, next) => {
  try {
    const item = await Testimonial.create(req.body);
    res.status(201).json(item);
  } catch (err) { next(err); }
});

module.exports = router;
