const express = require('express');
const matchRouter = express.Router();
// const createMatch = require("./createMatch.js");
// const readMatch = require("./readMatch.js");
// const updateMatch = require("./matchUpdate.js");
const deleteMatch = require("./matchDelete.js");


// Read One Match
// matchRouter.get('/', readMatch);

//Update Match
// matchRouter.put('/:playerOne', updateMatch);

// Delete Match
matchRouter.delete('/:playerOne', deleteMatch);


module.exports = matchRouter;