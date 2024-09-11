const mongoose = require('mongoose')

// MongoDB connection string (replace with your own MongoDB URI)
const mongoURI = 'mongodb://mongo:NsirlpVQZHBlfbXdZnlhbQGUaesIpNRN@junction.proxy.rlwy.net:17713'

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
