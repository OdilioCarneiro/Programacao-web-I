var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  return res.redirect('/users/signup');
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

router.post('/signup', function(req, res, next) {
  const userid = req.body.userid;
  if (!userid) {
    return res.redirect('/users/signup');
  }
  return res.redirect('/users/' + encodeURIComponent(userid));
});


router.get('/:userid', function(req, res, next) {
  const userid = req.params.userid;
  if (!userid) {
    return res.redirect('/users/signup');
  }
  res.render('welcome', { title: 'Welcome', userid: userid });
});

router.use(function routeMiddleware(req, res, next) {
  res.render('route', { title: 'Users', routeName: 'users' });
});

module.exports = router;
