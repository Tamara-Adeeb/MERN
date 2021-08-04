const productController = require("../controllers/product.controller")

module.exports = app => {
    app.post('/api/products', productController.createProduct)
    app.get('/api/product', productController.findAllProducts)
    app.delete('/api/product/:id', productController.deleteProduct)
    app.put('/api/product/:id', productController.updateProduct)
    app.get('/api/:id', productController.findOneProduct)
}