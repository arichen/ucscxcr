var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    course_number: String,
    year: Number,
    quarter: String,
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Course', schema);

