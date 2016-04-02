'use strict';

const router = require('express').Router();

const dataRoutes = require('./modules/data/data.routes');

router.use('/api', dataRoutes);

module.exports = router;
