const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/player',PlayerController.AllPlayer)
    app.post('/api/player', PlayerController.createPlayer)
    app.delete('/api/player/:id',PlayerController.deletePlayer)
    app.put('/api/player/:id',PlayerController.updatePlayer)
    app.get('/api/player/:id',PlayerController.findPlayer)
}