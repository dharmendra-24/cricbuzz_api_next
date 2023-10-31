const { Schema, model } = require('mongoose');
const matchschema = new Schema({

    team1: {
        type: String,
        required: true,
    },
    team2: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),

    },
    Time: {
        type: Date, default: Date.now,

    },
    toss: {
        type: String,
        required: true,
    },
    image1: {
        type: String,

    },
    image2: {
        type: String
    },
    S_No: {
        required: true,
        type: Number
    },
})
const matchmodel = model('match', matchschema);
module.exports = matchmodel;