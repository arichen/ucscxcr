var Course = require('../models/course');
var Review = require('../models/review');
var Instructor = require('../models/instructor');
var User = require('../models/user');

var express = require('express');
var router = express.Router();

// api
router.get('/api/test', function (req, res, next) {
  // create some dummy users
  var users = [
    { username: 'john', email: 'john@gmail.com' },
    { username: 'mary', email: 'mary@gmail.com' }
  ];
  User.create(users, function (err, result) {
    if (err) {
      console.log('Error creating objects');
      return;
    }

    console.log('Inserted: ' + result);
  });

  var insturctors = [
    { name: 'Tim Cook' },
    { name: 'Ya Hoo' },
    { name: 'Lala Lu' }
  ]
  Instructor.create(insturctors, function (err, result) {
    if (err) {
      return;
    }

    // create some dummy courses
    var courses = [
      { name: 'Python', course_number: '001', year: 2016, quarter: 'Spring', instructor: result[0] },
      { name: 'Javascript', course_number: '002', year: 2016, quarter: 'Spring', instructor: result[1] },
      { name: 'C++', course_number: '003', year: 2016, quarter: 'Summer', instructor: result[2] }
    ];

    Course.create(courses, function (err, result) {
      if (err) {
        console.log('Error creating objects');
        //     return;
      }
      console.log('Inserted: ' + result);
    })
  });

  User.find(function (err, result) {
    for (var i = 0; i < 10; i++) {
      var idx = Math.floor( (Math.random()*10) % result.length );
      var user = result[idx];

      Course.find(function (_err, _result) {
        var idx = Math.floor( (Math.random()*10) % _result.length );
        var course = _result[idx];

        console.log(user, course);

        var review = {
          course: course,
          author: user,
          course_rate: Math.ceil( (Math.random()*10) % 5 ),
          instructor_rate: Math.ceil( (Math.random()*10) % 5 ),
          text: 'Hello'
        };
        Review.create(review, function (e, r) {
          console.log(r);
        })
      })
    }

  })

  res.json([{test: 'test'}, {test:'abc'}]);
});

router.get('/api/reviews', function (req, res, next) {

  Review
      .find()
      .populate({
        path: 'course',
        populate: { path: 'instructor' }
      })
      .populate('author')
      .exec(function (err, result) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
          res.send(err);
        }
        res.json(result);
      });

});

// application
router.get('*', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
