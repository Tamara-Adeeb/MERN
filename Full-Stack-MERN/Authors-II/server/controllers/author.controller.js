
const { Author } = require('../models/author.model');

module.exports.findAllAuthors = (request,response) => {
    Author.find().sort({name:-1})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.newAuthor = (request,response) => {
    const {name} = request.body;
    Author.create({
        name
    })
    .then(res => response.json(res))
    .catch(err => response.status(400).json(err));
}

module.exports.findAuthor = (request,response) => {
    Author.findOne({_id:request.params.id})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.updateAuthor = (request,response) => {

    Author.findOneAndUpdate(
        {_id:request.params.id},
        request.body,
        { new: true, runValidators: true }
    )
    .then(res => response.json(res) )
    .catch(err => response.status(400).json(err) )
}

module.exports.deleteAuthor = (request,response) => {
    Author.deleteOne({_id:request.params.id})
    .then(result => response.json({result:result}))
    .catch(err => response.status(400).json(err));
}