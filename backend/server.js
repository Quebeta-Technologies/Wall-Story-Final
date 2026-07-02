require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');

const servicesRoutes = require('./routes/services');
const testimonialsRoutes = require('./routes/testimonials');
const galleryRoutes = require('./routes/gallery');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Database ----------
connectDB();

// ---------- Middleware ----------
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));

// Rate limit on contact submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
});

// ---------- Routes ----------
app.get('/', (_req, res) => {
  res.json({
    name: 'The Wall Story API',
    status: 'running',
    endpoints: [
      'GET  /api/services',
      'GET  /api/testimonials',
      'GET  /api/gallery',
      'POST /api/contact',
    ],
  });
});

app.use('/api/services', servicesRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactLimiter, contactRoutes);

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Error handler
app.use((err, req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Server error' });
});

app.listen(PORT, () => {
  console.log(`✦ The Wall Story API listening on http://localhost:${PORT}`);
});
