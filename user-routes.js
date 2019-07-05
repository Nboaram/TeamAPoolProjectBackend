const express = require('express');
const router = express.Router();
const createUser = require("./userCreate.js");
const readUser = require("./readUser.js");
const updateUser = require("./userUpdate.js");
const deleteUser = require("./userDelete.js");

//Make function in another file and export it
//Join it up in here

// In the other file the code looks like:
// exports = router.post('/create', (req, res, next) => {
//     const newUser = new Users.UserModel(req.body);
//     return newUser.save().then(
//         doc => res.status(201).send(doc),
//         error => next(error)
//     );
// });

// Create User
router.post('/', createUser);

// Read One User
router.get('/:username', readUser);

//Update User
router.put('/:username', updateUser);

// Delete User
router.delete('/:username', deleteUser);

module.exports = router;