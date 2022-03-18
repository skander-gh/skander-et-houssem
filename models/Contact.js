const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String ,required:true, unique:true },
contactTélé :{type: Number},
prix:Number,
role:{
    type:String,
    default:"salle"
}
});



module.exports = mongoose.model('Contact', ContactSchema)
