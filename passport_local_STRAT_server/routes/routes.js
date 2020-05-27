var express = require('express');
var router = express.Router();
var users = require('./users');
var home = require('./home');
var signup=require('./signup')

router.use('/home', home);
router.use('/users', users);
// router.use('/signup', signup);

module.exports = router;
