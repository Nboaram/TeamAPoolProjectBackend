let mongoose = require("mongoose");
let schema = mongoose.Schema;

exports.resultsSchema = new schema({
    wins: Number,
    losses: Number
});

exports.matchUpsSchema = new schema({
    opponentUsername: String,
    results: this.resultsSchema
});

exports.user = new schema({
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
    wins: Number,
    losses: Number,
    totalGames: Number,
    matchUps: this.matchUpsSchema
});

exports.UsersModel = mongoose.model('UserDatabase', this.user);
