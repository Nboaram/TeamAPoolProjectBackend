let mongoose = require("mongoose");

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
    MatchUps: [{
        opponentUsername: String,
        Results: [{
            Wins: Number,
            Losses: Number
        }]
    }]
});

const userDB = mongoose.model(
    "UserDatabase",
    user
);
