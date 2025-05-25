const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel")
//ayncHandler is a middleware that will handle the error for us we dont have to use try and catch block for every function
//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    const contacts =await Contact.find();
    // res.status(200).json({ "message": "Get all Contacts" });
        res.status(200).json(contacts);

});

//@desc Get a Contact
//@route Get /api/contac ts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Conatct not found");
    }
    // res.status(200).json({ message: `Get a Contact for ${req.params.id}` });
    res.status(200).json(contact);
})

//@desc Create new Contact
//@route POST /api/contacts
//@access Public
const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body); //it will we give undefine we have to use ecpress middleware for json onject which we can get from the body
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please include all fields");
    }
    const contact = await Contact.create({
        name, email, phone
    })
    // res.status(201).json({ message: "Create Contacts" });
    res.status(201).json(contact);
})

//@desc Update a Contact
//@route PUt /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id); // FIXED this line
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found"); // Also fixed typo: "Conatct" -> "Contact"
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // returns the updated document
    );

    res.status(200).json(updatedContact);
    // res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
})
//@desc Delet a Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json({ message: "Contact deleted successfully", deletedContact: contact });
    // res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
})


module.exports = {
    getContact, createContact, updateContact, getContacts, deleteContact
}