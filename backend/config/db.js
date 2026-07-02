const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/wallstory';
    const conn = await mongoose.connect(uri);
    console.log(`✦ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`✗ MongoDB error: ${err.message}`);
    console.log('⚠  Server will continue running without DB. Frontend will use fallback data.');
  }
};

module.exports = connectDB;
