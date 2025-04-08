const Transaction = require('../models/Transaction');
const reportGenerator = require('../utils/reportGenerator');

exports.addTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.filterTransactions = async (req, res) => {
  try {
    const { startDate, endDate, category } = req.query;
    let filter = {};

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (category) {
      filter.category = category;
    }

    const transactions = await Transaction.find(filter);
    res.status(200).json(transactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const report = reportGenerator(transactions);
    res.status(200).json(report);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.addTransaction = async (req, res) => {
  try {
    req.body.type = req.body.type.charAt(0).toUpperCase() + req.body.type.slice(1).toLowerCase(); // Auto-correct case

    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
