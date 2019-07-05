const Users = require('./userSchema');

module.exports = (request, response) => {
    Users.UsersModel.find().then((user) => {
            response.status(200).send(user);
        })
};