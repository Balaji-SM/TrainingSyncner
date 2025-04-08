const { getDB } = require('../db');
const { validateContact } = require('../models/contact');

const addContact = async (req, res) => {
    try {
        validateContact(req.body);
        await getDB().collection('contacts').insertOne(req.body);
        res.status(201).send("Contact Added");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

const listContacts = async (req, res) => {
    const contacts = await getDB().collection('contacts').find().toArray();
    res.json(contacts);
};

const searchContacts = async (req, res) => {
    const { name } = req.query;
    const contacts = await getDB().collection('contacts').find({ name: { $regex: name, $options: 'i' } }).toArray();
    res.json(contacts);
};

const updateContact = async (req, res) => {
    const { id } = req.params;
    await getDB().collection('contacts').updateOne({ _id: require('mongodb').ObjectId(id) }, { $set: req.body });
    res.send("Contact Updated");
};

const deleteContact = async (req, res) => {
    const { id } = req.params;
    await getDB().collection('contacts').deleteOne({ _id: require('mongodb').ObjectId(id) });
    res.send("Contact Deleted");
};

module.exports = { addContact, listContacts, searchContacts, updateContact, deleteContact };
// controllers/contactController.js

exports.getAllContacts = (req, res) => {
    res.send("Get all contacts");
};

exports.createContact = (req, res) => {
    res.send("Create new contact");
};
