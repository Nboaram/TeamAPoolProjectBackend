const Users = require('./userSchema'); 

module.exports = (request, response, next) => {
    Users.UsersModel.create(request.body).then((user) => {
        response.send(user);
    }).catch(next);
};
