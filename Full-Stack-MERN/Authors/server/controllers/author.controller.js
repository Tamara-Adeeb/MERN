const { response } = require('express');
const {Author} = require('../models/author.model');

module.exports.findAllAuthors = (request,response) => {
    Author.find()
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.newAuthor = (request,response) => {
    const {name} = request.body;
    Author.create({
        name
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

module.exports.updateAuthor = (request,response) => {
    const {id, author} = request.body;
    Author.findOneAndUpdate(
        {_id:id},
        author,
        { new: true, runValidators: true }
    )
    then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request,response) => {
    Author.deleteOne({_id:request.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}