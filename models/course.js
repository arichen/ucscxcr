var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: String,
    course_number: String,
    year: Number,
    quarter: String,
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() }
});

schema.index({ 'name' : 'text' });

module.exports = mongoose.model('Course', schema);
