const Match = require('./matchSchema');

module.exports = (request, response) => {
    return Match.MatchModel.findOne({playerOne: request.params.playerOne}).then((player) => {
            return response.status(200).send(player);
        })
};