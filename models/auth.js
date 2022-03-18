const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({



email:{type:String ,required:true, unique:true },
password:{type: String,required:true},
role:{
    type:String,
    default:"user"
}

})

module.exports = mongoose.model('user', UserSchema)