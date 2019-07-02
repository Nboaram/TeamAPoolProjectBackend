let mongoose = require("mongoose");
const resultsSchema = new mongoose.schema({
    Wins: Number,
    Losses: Number
});

const matchUpsSchema = new mongoose.schema({
    opponentUsername: String,
    Results: ResultSchema
});

const user = new mongoose.schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    firstName: String,
    surname: String,
    password: {
        type: String,
        required: true
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
