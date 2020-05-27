var express = require('express');
var router = express.Router();
var checkAuth = require('../middleware/JwtAuth')

/* GET home page. */
router.get('/', checkAuth,function(req, res, next) {
  res.render('index', { title: 'home' });
});


router.post('/', checkAuth,function(req, res, next) {
  // res.render('index', { title: 'home' });
  res.send({status:200,message:'Succusfull auth!!'});
});


module.exports = router;
