const express = require('express');
const matchRouter = express.Router();
const createMatch = require("./createMatch.js");
const readAllMatch = require("./matchReadAll.js");
const readMatch = require("./matchRead.js")
// const updateMatch = require("./userMatch.js");
// const deleteMatch = require("./userMatch.js");

// Read All Match
matchRouter.get('/', readAllMatch);

// Create Match
matchRouter.post('/', createMatch);

// Read One Match
matchRouter.get('/:playerOne', readMatch);

//Update Match
// matchRouter.put('/:playerOne', updateMatch);

// Delete Match
// matchRouter.delete('/:playerOne', deleteMatch);

module.exports = matchRouter;