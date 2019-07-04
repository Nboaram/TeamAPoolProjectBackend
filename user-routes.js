const express = require('express');
const router = express.Router();
//createUser = require("./createUser.js");
const readUser = require("./readUser.js");
//updateUser = require("./userUpdate.js");
//deleteUser = require("./userDelete.js");

//Make function in another file and export it
//Join it up in here



//In the other file the code looks like:
// exports = router.post('/create', (req, res, next) => {
//     const newUser = new Users.UserModel(req.body);
//     return newUser.save().then(
//         doc => res.status(201).send(doc),
//         error => next(error)
//     );
// });

// Create User
//router.post('/', createUser);

// Read One User
router.get('/', readUser);

//Update User
//router.put('/', updateUser);

// Delete User
//router.delete('/', deleteUser);


module.exports = router;


