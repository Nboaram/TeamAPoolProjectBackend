//get user

const Users = require('./userSchema');

module.exports = (request, response) => {
    console.log(request);
      return Users.UsersModel.findOne(username, request.params.username ).then((doc) => {
        return response.send(doc)
    });
};   