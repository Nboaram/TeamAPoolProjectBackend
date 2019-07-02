let mongoose = require("mongoose");
let schema = mongoose.schema;

exports.resultsSchema = new schema({
    Wins: Number,
    Losses: Number
});

exports.matchUpsSchema = new schema({
    opponentUsername: String,
    Results: ResultSchema
});

exports.UsersSchema = new schema({
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

const userDB = mongoose.model(
    "UserDatabase",
    user
);
exports.UsersModel = mongoose.model('UserDatabase', this.user)
