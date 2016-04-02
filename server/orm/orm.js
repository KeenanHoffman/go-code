'use strict';

const Waterline = require('waterline');
const orm = new Waterline();

// get connection configs
const connectionConfig = require('../configs/connection.js');

// load model definitions
const User = require('../modules/users/users.model.js');

// load models into orm
orm.loadCollection(User);

// initialize function
function initialize(app, PORT, callback) {
    // Initialize the whole database and store models and connections to app
    orm.initialize(connectionConfig, function(err, models) {
      if(err) throw err;
      // pass the collections (models) and connections created to app
      callback(models.collections, models.connections);
    });
}
module.exports = {
  initialize
};
