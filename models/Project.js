const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  techStack: [String], // ✅ array of strings
  estimatedBudget: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in progress', 'completed'],
    default: 'open'
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
