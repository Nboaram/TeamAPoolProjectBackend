const UsersAll = require('./userSchema');

module.exports = (request, response) => {
    UsersAll.UsersModel.find().then((user) => {
            response.status(200).send(user);
        })
};