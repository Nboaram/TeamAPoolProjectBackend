const Users = require('./userSchema'); 

module.exports = (request, response) => {
    Users.UsersModel.findOneAndRemove({username: request.params.username}).then((user) => {
        response.status(204).send(user);
    });
};