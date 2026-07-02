const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  order:       { type: Number, required: true },
  name:        { type: String, required: true },
  description: { type: String, required: true },
  icon:        { type: String, default: '' },
  active:      { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
