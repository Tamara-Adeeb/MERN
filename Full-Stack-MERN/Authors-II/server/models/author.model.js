const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[3,"name must be 3 chart"],
        required: true,
    }
})
module.exports.Author = mongoose.model('Author',AuthorSchema);