const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    if (!/^[+\d\s\-()]{7,20}$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone number' });
    }

    const entry = await Contact.create({ name, phone, email, service, message });
    res.status(201).json({
      success: true,
      message: 'Thank you! We will reach out shortly.',
      id: entry._id,
    });
  } catch (err) { next(err); }
});

router.get('/', async (_req, res, next) => {
  try {
    const items = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json(items);
  } catch (err) { next(err); }
});

module.exports = router;
