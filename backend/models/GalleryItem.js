const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title:    { type: String, required: true },
  location: { type: String, default: '' },
  category: { type: String, default: 'residential' },
  imageUrl: { type: String, required: true },
  order:    { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('GalleryItem', gallerySchema);
