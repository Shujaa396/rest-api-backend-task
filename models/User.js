const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user', // can be 'user' or 'developer'
    enum: ['user', 'developer']
  }
});

module.exports = mongoose.model('User', userSchema);
