var express = require('express');
var router = express.Router();

// api
router.get('/api/test', function (req, res, next) {
  res.json([{test: 'test'}, {test:'abc'}]);
})

// application
router.get('*', function(req, res, next) {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
