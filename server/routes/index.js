'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.models.bus_geocoded.findOne(0).exec(function(err, users) {
    if (err) {
      next(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = router;
