const Users = require('./userSchema'); 

module.exports = (request, response) => {
    Users.UsersModel.findOneAndRemove({name: request.params.name}).then((foundData) => {
        response.status(200).send(foundData);
    });
};