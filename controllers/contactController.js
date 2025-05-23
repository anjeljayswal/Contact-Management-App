//@desc Get all Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req,res)=>{
    res.status(200).json({"message":"Get all Contacts"});
};

//@desc Get a Contact
//@route Get /api/contacts/:id
//@access Public
const getContact = (req,res)=>{
    res.status(200).json({message:`Get a Contact for ${req.params.id}`});
}

//@desc Create new Contact
//@route POST /api/contacts
//@access Public
const createContact = (req,res)=>{
    console.log("the request body is:",req.body); //it will we give undefine we have to use ecpress middleware for json onject which we can get from the body
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please include all fields");
        
    }
    res.status(201).json({message: "Create Contacts"});
}

//@desc Update a Contact
//@route PUt /api/contacts/:id
//@access Public
const updateContact =(req,res)=>{
    res.status(200).json({message:`Update Contacts for ${req.params.id}`});
}
//@desc Delet a Contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact =(req,res)=>{
    res.status(200).json({message:`Delete Contacts for ${req.params.id}`});
}


module.exports = {
    getContact, createContact,updateContact,getContacts,deleteContact  }