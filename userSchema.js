let mongoose = require("mongoose");
let schema = mongoose.schema;
const resultsSchema = schema({
    Wins: Number,
    Losses: Number
});

const matchUpsSchema = schema({
    opponentUsername: String,
    Results: ResultSchema
});

const user = schema({
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
