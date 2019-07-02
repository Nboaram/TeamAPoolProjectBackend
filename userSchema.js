let mongoose = require("mongoose");
let schema = mongoose.Schema;

let resultsSchema = new schema({
    Wins: Number,
    Losses: Number
});

let matchUpsSchema = new schema({
    opponentUsername: String,
    Results: resultsSchema
});

let user= new schema({
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
    Wins: Number,
    Losses: Number,
    TotalGames: Number,
    MatchUps: matchUpsSchema
});

// let userDB = mongoose.model( 'UserDatabase', user );
exports.UsersModel = mongoose.model( 'UserDatabase', user );
// exports.UserSchema = user;
