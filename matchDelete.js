const Matches = require('./matchScheme'); 

module.exports = (request, response) => {
    Matches.MatchModel.findOneAndRemove({player_one: request.params.player_one}).then((matchUser) => {
        response.status(204).send(matchUser);
    });
};