const express = require('express');
const router = express.Router();
const {
  addTransaction,
  getTransactions,
  filterTransactions,
  getSummary
} = require('../controllers/transactionController');

router.post('/transactions', addTransaction);
router.get('/transactions', getTransactions);
router.get('/transactions/filter', filterTransactions);
router.get('/transactions/summary', getSummary);

module.exports = router;
