const express = require('express');
const Service = require('../models/Service');

const router = express.Router();

// GET all services
router.get('/', async (_req, res, next) => {
  try {
    const services = await Service.find({ active: true }).sort({ order: 1 });
    res.json(services);
  } catch (err) { next(err); }
});

// GET one service
router.get('/:id', async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: 'Service not found' });
    res.json(service);
  } catch (err) { next(err); }
});

// POST — admin only in production
router.post('/', async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) { next(err); }
});

module.exports = router;
