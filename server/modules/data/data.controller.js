'use strict';

function getOne(req, res, next) {
  req.models.bus_geocoded.find({
    principalZipCode: '80521',
    entityStatus: 'Good Standing',
    select: ['entityId', 'entityName', 'Location']
  }).exec(function(err, business_locations) {
    if (err) {
      next(err);
    } else {
      business_locations.forEach(function(business_location) {
        var latLng = business_location.Location.split('(')[1];
        if(latLng) {
          latLng = latLng.split(',');
          latLng[0] = Number(latLng[0]);
          latLng[1] = Number(latLng[1].split(')')[0]);
          business_location.latLng = latLng;
        }
      });
      res.json(business_locations);
    }
  });
}

module.exports = {
  getOne
};
