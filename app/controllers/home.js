var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {

  // To redirect to the APIDOC documentation instead, comment the 3 lines above and uncomment this one.
  res.redirect('/apidoc');
});

router.all('/test/:param1/:param2', function(req, res, next) {
  res.send({
    method: req.method,
    path: req.path,
    params: req.params,
    query: req.query,
    headers: req.headers,
    body: req.body
  });
});
