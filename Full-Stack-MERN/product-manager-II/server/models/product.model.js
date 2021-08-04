const mongoose = require("mongoose");

const ProductCollection = new mongoose.Schema({
    title: {
        type:String,
        required: [
            true,
            "Title is required"
        ],
        trim: true,
        minLength:3},
    price:{ 
        type:String,
        required: [
            true,
            "Price is required"
        ],
        trim: true},
    description:{
        type:String,
        required: [
            true,
            "Description is required"
        ],
        trim: true,
        minLength:3
        }

}, {timestamps:true})

module.exports.Product = mongoose.model('Product',ProductCollection);   