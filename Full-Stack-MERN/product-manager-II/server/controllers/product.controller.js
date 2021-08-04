const {Product} = require('../models/product.model');

module.exports.createProduct = (request,response) => {
    const {title, price, description} = request.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(error => {
        console.log(error)
        response.json(error)
    });
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
    Product.deleteOne({_id:request.params.id})
    .then(result => responce.json({ result: result }))
    .catch(err => responce.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.body.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
