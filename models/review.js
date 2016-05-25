var mongoose = require('mongoose');

var schema = mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    course_rate: Number,
    instructor_rate: Number,
    text: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updated: { type: Date, default: Date.now() },
    created: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Review', schema);

