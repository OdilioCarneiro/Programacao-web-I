var express = require('express');
var router = express.Router();
// If user visits /users exactly, redirect to signup
router.get('/', function(req, res, next) {
  return res.redirect('/users/signup');
});

// Signup page
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup' });
});

// Accept signup form and redirect to the welcome route
router.post('/signup', function(req, res, next) {
  const userid = req.body.userid;
  if (!userid) {
    return res.redirect('/users/signup');
  }
  return res.redirect('/users/' + encodeURIComponent(userid));
});

// Route that receives a userid and shows a welcome message
router.get('/:userid', function(req, res, next) {
  const userid = req.params.userid;
  if (!userid) {
    return res.redirect('/users/signup');
  }
  res.render('welcome', { title: 'Welcome', userid: userid });
});

// Fallback for any other requests under /users: render shared page with route name
router.use(function routeMiddleware(req, res, next) {
  res.render('route', { title: 'Users', routeName: 'users' });
});

module.exports = router;
