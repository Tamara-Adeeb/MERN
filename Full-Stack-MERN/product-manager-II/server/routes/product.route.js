const productController = require("../controllers/product.controller")

module.exports = app => {
    app.post('/api/product', productController.createProduct)
    app.get('/api/product', productController.findAllProducts)
    app.delete('/api/product', productController.deleteProduct)
    app.put('/api/product', productController.updateProduct)
    app.get('/api/:id', productController.findOneProduct)
}