
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('./conn');

const newsFlickSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
});

const newsFlick = conn.model('newsFlick', newsFlickSchema);

module.exports = newsFlick;
