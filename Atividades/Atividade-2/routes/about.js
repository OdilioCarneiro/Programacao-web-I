var express = require('express');
var router = express.Router();


router.use(function routeMiddleware(req, res, next) {

  res.render('route', { title: 'About', routeName: 'about' });
});



module.exports = router;