const Users = require('./userSchema');

module.exports = (request, response) => {
    console.log(request);
    return Users.UsersModel.find().then((foundData) => {
        return response.status(200).send(foundData);
    });
};   