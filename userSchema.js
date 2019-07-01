let mongo = require("mongoose");

const user = new mongo.schema({
    username: String,
    firtName: String,
    surname: String,
    password: String,
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

const userDB = mongo.model(
    "UserDatabase",
    user
);
