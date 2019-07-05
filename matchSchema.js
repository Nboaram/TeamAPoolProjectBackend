let mongoose = require("mongoose");
let schema = mongoose.Schema;

exports.match = new schema({
    playerOne: { 
        type: String,
        required: true,
        unique: true
    },
    playerTwo: {
        type: String,
        required: true,
        unique: true
    },
    queueNumber: {
        type: Number,
        required: true,
        unique : true
    }
});

exports.MatchModel = mongoose.model('MatchDatabase', this.match);