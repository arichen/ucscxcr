var Course = require('../models/course');
var Review = require('../models/review');
var Instructor = require('../models/instructor');
var User = require('../models/user');

var express = require('express');
var router = express.Router();

// dummy
router.use('/dummy', require('./dummy'));

// api
router.get('/api/reviews', function (req, res, next) {
  console.log(req.query);

  // get courseId, otherwise retrieve all reviews
  var find = null;
  var courseId = req.query.courseId;
  if (courseId) {
    find = { course : courseId };
  }
  console.log('find: ', find);

  // populate course detail
  var showCourse = req.query.showCourse ? Boolean(Number(req.query.showCourse)) : true;

  // params
  var limit = Number(req.query.limit) || 10;
  var page = Number(req.query.page) || 1;
  console.log('page: ' + page);
  var order = Number(req.query.order) || -1;
  var sort = { updated : order };
  console.log('sort: ', sort);


  // build query
  var query = Review
      .find(find)
      .limit(limit)
      .skip(limit * (page - 1))
      .sort(sort)
      .populate('author');

  // populate course detail
  if (showCourse) {
    query.populate({
      path: 'course',
      populate: { path: 'instructor' }
    });
  }

  // execute
  query.exec(function (err, result) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err) {
      res.send(err);
    }
    res.json(result);
  });

});

router.get('/api/review/:id', function (req, res, next) {
  console.log('Review id: ' + req.params.id);

  Review
      .findOne({
        _id: req.params.id
      })
      .populate('author')
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      });
});

router.get('/api/courses', function (req, res, next) {

  Course
      .find()
      .populate('instructor')
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      });

});

router.get('/api/search', function (req, res, next) {
  var keyword = req.query.keyword;
  if (!keyword) {
    res.send([]);
  }

  Course
      .find({
        $text: { $search : keyword }
      })
      .sort({ updated : -1 })
      .exec(function (err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      })
})

// application
router.get('*', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
