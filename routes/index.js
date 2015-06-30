var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/mission', function(req, res, next) {
  res.render('mission', { title: 'Mission' });
});

module.exports = router;
