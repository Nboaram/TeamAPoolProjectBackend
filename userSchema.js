let mongoose = require("mongoose");
let schema = mongoose.Schema;

let resultsSchema = new schema({
    wins: Number,
    losses: Number
});

let matchUpsSchema = new schema({
    opponentUsername: String,
    results: resultsSchema
});

let user = new schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    wins: Number,
    losses: Number,
    totalGames: Number,
    matchUps: matchUpsSchema
});

exports.UsersModel = mongoose.model('UserDatabase', user);
