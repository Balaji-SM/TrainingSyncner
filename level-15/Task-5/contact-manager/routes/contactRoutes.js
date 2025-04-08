const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactContoller');

router.post('/contacts', contactController.addContact);
router.get('/contacts', contactController.listContacts);
router.get('/contacts/search', contactController.searchContacts);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
