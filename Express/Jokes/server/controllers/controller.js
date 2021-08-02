const Joke = require('../models/model');

module.exports.findAllJokes = (request,response) =>{
    Joke.find()
    .then(jokes => response.json(jokes))
    .catch(error => response.json(error))
}

module.exports.findOneJoke = (request,response) =>{
    Joke.findOne({_id: request.params.id})
    .then(joke => response.json(joke))
    .catch(error => response.json(error))
}

module.exports.createJoke = (request,response) =>{
    const { setup, punchline} = request.body;
    Joke.create({
        setup,
        punchline
    })
    .then(joke => response.json(joke))
    .catch(error => response.json(error))
}

module.exports.updateJoke = (request,response) =>{
    Joke.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        // { new: truecopy, runValidators: true }
    )
    .then(updateJoke => response.json({joke: updateJoke}))
    .catch(error => response.json(error))
}

module.exports.deleteJoke = (request,response) =>{
    Joke.deleteOne({_id: request.params.id})
    .then(result => response.json({ result: result }))
    .catch(err => response.json({ message: 'Something went wrong', error: err }));
}