const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('./conn');

const edeptoSchema = new Schema({
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

const edepto = conn.model('edepto', edeptoSchema);

module.exports = edepto;