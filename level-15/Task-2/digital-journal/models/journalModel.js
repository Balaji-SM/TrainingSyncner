const { client } = require('../config/db');
const db = client.db('digitaljournal');
const Journal = db.collection('journals');

module.exports = Journal;
