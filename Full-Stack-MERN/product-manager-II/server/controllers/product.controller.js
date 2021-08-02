const {Product} = require('../models/product.model');

module.exports.createProduct = (request,response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(error => response.json(error));
}

module.exports.findAllProducts = (request,response) => {
    Product.find()
    .then(products => response.json(products))
    .catch(error => response.json(error));
}

module.exports.findOneProduct = (request,response) => {
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(error => response.json(error));
}

module.exports.deleteProduct = (request,responce) => {
    Product.deleteOne({_id:request.body})
    .then(result => responce.json({ result: result }))
    .catch(err => responce.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (request,responce) => {
    const { product_id,product } = request.body;
    Product.findOneAndUpdate({ _id: product_id },product, { new: true, runValidators: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}