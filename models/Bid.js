const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  developerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Developer',
    required: true
  },
  bidAmount: {
    type: Number,
    required: true
  },
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Bid', bidSchema);
