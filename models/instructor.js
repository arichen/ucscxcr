var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Instructor', schema);
