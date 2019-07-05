const Users = require('./userSchema');

module.exports = (request, response) => {
    Users.UsersModel.findOneAndUpdate({'username': request.params.username}, request.body).then((user) => {
        Users.UsersModel.findOne({'username': request.params.username}).then((user) => {
            response.status(200).send(user);
        })
    });
};