const mongoose = require('mongoose');
const conn = mongoose.createConnection("mongodb+srv://saquibshahid508:1234@cluster0.ytjnm7u.mongodb.net/saas2");
module.exports = conn;