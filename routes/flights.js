var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/movies');

/* GET flights listing. */
router.get('/new', moviesCtrl.new);


module.exports = router;
