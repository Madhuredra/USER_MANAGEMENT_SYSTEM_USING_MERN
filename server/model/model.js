const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
    type:String,
    reqired:true
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    gender:String,
    status:String
})

const userDB = mongoose.model('userdb',schema);

 module.exports = userDB