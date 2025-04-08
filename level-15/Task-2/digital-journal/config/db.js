const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
const connectDB = async () => {
    try {
        await client.connect();
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
    }
};

module.exports = { connectDB, client };
