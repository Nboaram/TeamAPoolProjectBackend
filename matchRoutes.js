const express = require('express');
const matchRouter = express.Router();
const deleteMatch = require("./matchDelete.js");
const createMatch = require("./createMatch.js");
const readAllMatch = require("./matchReadAll.js");
// const updateMatch = require("./matchUpdate.js");
const readMatch = require("./matchRead.js")

// Create Match
matchRouter.post('/', createMatch);

// Read All Match
matchRouter.get('', readAllMatch);

// Read One Match
matchRouter.get('/:playerOne', readMatch);

//Update Match
// matchRouter.put('/:playerOne', updateMatch);

// Delete Match
matchRouter.delete('/:playerOne', deleteMatch);

module.exports = matchRouter;