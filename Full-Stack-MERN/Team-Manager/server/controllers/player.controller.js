const {Player} = require('../models/player.model');

module.exports.AllPlayer = (request,response) => {
    Player.find()
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.findPlayer = (request,response) => {
    Player.findOne({_id:request.params.id})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}

module.exports.createPlayer = (request,response) => {
    const { teamName, preferredPosition} = request.body;
    Player.create({
        teamName,
        preferredPosition,
        Game1:"Undecided",
        Game2:"Undecided",
        Game3:"Undecided",
    })
    .then(player => response.json(player))
    .catch(err => response.status(400).json(err))
}

module.exports.deletePlayer = (request,response) => {
    Player.deleteOne({_id:request.params.id})
    .then(res => response.json({result:result}) )
    .catch(err => response.json(err))
}

module.exports.updatePlayer = (request,response) => {
    console.log(request.body);
    const {Game} = request.body;
    Player.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(res => response.json(res))
    .catch(err => response.json(err))
}