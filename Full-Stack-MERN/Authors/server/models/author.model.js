const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    }
})
module.exports.Author = mongoose.model('Author',AuthorSchema);