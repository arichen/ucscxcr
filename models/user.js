var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User', schema);