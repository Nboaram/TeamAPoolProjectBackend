const express = require('express');
const router = express.Router();
const createUser = require("./userCreate.js");
const readAllUser = require("./userReadAll.js");
const readUser = require("./readUser.js");
const updateUser = require("./userUpdate.js");
const deleteUser = require("./userDelete.js");

// Create User
router.post('/', createUser);

// Read All User
router.get('/', readAllUser);

// Read One User
router.get('/:username', readUser);

//Update User
router.put('/:username', updateUser);

// Delete User
router.delete('/:username', deleteUser);

module.exports = router;