'use strict';

function getOne(req, res, next) {
  req.models.bus_geocoded.findOne(2).exec(function(err, users) {
    if (err) {
      next(err);
    } else {
      res.json(users);
    }
  });
}

module.exports = {
  getOne
};
