const Match = require('./matchSchema'); 

module.exports = (request, response, next) => {
    Match.MatchModel.create(request.body).then((match) => {
        response.send(match);
    }).catch(next);
};