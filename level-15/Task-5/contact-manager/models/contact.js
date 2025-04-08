const validateContact = (contact) => {
    if (!contact.name || !contact.email || !contact.phone || !contact.address) {
        throw new Error("All fields are required.");
    }
};

module.exports = { validateContact };
