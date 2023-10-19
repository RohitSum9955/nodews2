const mongoose =  require('mongoose');
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    phone:{
        type: String, //because diffrent country has to diffrent code so
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
