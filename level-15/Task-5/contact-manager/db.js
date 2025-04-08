const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);
let db;

const connectDB = async () => {
    await client.connect();
    db = client.db('contactDB');
    console.log("MongoDB Connected...");
};

const getDB = () => db;

module.exports = { connectDB, getDB };
