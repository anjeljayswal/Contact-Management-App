const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    name:{
        type:String,
        require:[true, "Please add the contact name"],
    },
    email:{
        type:String,
        require:[true, "Please add the contact email adderess"],
    },
    phone:{
        type:String,
        require:[true, "Please add the contact phone number"],
    },
},{
    timestamps:true,
}
);
module.exports=mongoose.model("contact", contactSchema)