const Match = require('./matchSchema');

module.exports = (request, response) => {
    Match.MatchModel.find().then((player) => {
            response.status(200).send(player);
        })
};