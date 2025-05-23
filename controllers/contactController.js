const asyncHandler = require('express-async-handler');
//ayncHandler is a middleware that will handle the error for us we dont have to use try and catch block for every function
//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": "Get all Contacts" });
});

//@desc Get a Contact
//@route Get /api/contac ts/:id
//@access Public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get a Contact for ${req.params.id}` });
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
    res.status(201).json({ message: "Create Contacts" });
})

//@desc Update a Contact
//@route PUt /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Contacts for ${req.params.id}` });
})
//@desc Delet a Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Contacts for ${req.params.id}` });
})


module.exports = {
    getContact, createContact, updateContact, getContacts, deleteContact
}