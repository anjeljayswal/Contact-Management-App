const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST api/user/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    // const contacts =await Contact.find();
    res.status(200).json({ "message": "Register the user" });
    // res.status(200).json(contacts);

});

//@desc Login a user
//@route POST api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": "Login the user" });

});

//@desc Current  user info
//@route POST api/user/current
//@access Public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message:"Current user information"})
});

module.exports={
    registerUser,
    loginUser,
    currentUser
}