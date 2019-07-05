const express = require('express');
const matchRouter = express.Router();
const createMatch = require("./createMatch.js");
// const readMatch = require("./readMatch.js");
// const updateMatch = require("./userMatch.js");
// const deleteMatch = require("./userMatch.js");


// Create Match
matchRouter.post('/', createMatch);

// Read One Match
// matchRouter.get('/', readMatch);

//Update Match
// matchRouter.put('/:playerOne', updateMatch);

// Delete Match
// matchRouter.delete('/:playerOne', deleteMatch);


module.exports = matchRouter;