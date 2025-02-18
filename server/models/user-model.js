const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },

    phone:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:false,
    },
});

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;