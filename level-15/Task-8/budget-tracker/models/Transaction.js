const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['Income', 'Expense'],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
