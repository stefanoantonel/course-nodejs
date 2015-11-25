var express = require('express');
var router = express.Router();
var Artist = require('../')
/* GET home page. */
router.get('/', function(req, res, next) {
	var artists = [
		"Justin",
		"Madonna",
		"Shakira"
	];
  res.render('artists/index', { title: 'Artists', artists: artists });
});

module.exports = router;
