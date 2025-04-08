const Journal = require('../models/journalModel');

// Create Entry
const createEntry = async (req, res) => {
    try {
        const { title, content, date, tags } = req.body;
        const result = await Journal.insertOne({ title, content, date, tags });
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get All Entries or Search
const getEntries = async (req, res) => {
    try {
        const { title, date, tags } = req.query;
        const query = {};

        if (title) query.title = { $regex: title, $options: 'i' };
        if (date) query.date = date;
        if (tags) query.tags = tags;

        const entries = await Journal.find(query).toArray();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Entry
const updateEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content, date, tags } = req.body;
        const result = await Journal.updateOne(
            { _id: new require('mongodb').ObjectId(id) },
            { $set: { title, content, date, tags } }
        );
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Entry
const deleteEntry = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Journal.deleteOne({ _id: new require('mongodb').ObjectId(id) });
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createEntry, getEntries, updateEntry, deleteEntry };
