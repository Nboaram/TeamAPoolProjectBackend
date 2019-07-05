const Matches = require('./matchSchema'); 

module.exports = (request, response) => {
    Matches.MatchModel.findOneAndRemove({playerOne: request.params.playerOne}).then((matchUser) => {
        response.status(204).send(matchUser);
    });
};