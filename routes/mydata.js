var express = require('express');
var router = express.Router();

/* Get mydata page.*/
router.get('/', function(req, res, next) {
  res.render('mydata', {title: 'Shiva Krishna Myakala'});
});

module.exports = router;