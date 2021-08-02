const mongoose = require("mongoose");

const ProductCollection = new mongoose.Schema({
    title: {type:String},
    price:{type:String},
    description:{type:String}

}, {timestamps:true})

module.exports.Product = mongoose.model('Product',ProductCollection);