const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/author', AuthorController.findAllAuthors)
    app.post('/api/author',AuthorController.newAuthor)
    app.put('/api/author', AuthorController.updateAuthor)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}