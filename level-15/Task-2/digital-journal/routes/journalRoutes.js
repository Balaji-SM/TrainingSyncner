const express = require('express');
const router = express.Router();
const { createEntry, getEntries, updateEntry, deleteEntry } = require('../controllers/journalController');

router.post('/entries', createEntry);
router.get('/entries', getEntries);
router.put('/entries/:id', updateEntry);
router.delete('/entries/:id', deleteEntry);

module.exports = router;
