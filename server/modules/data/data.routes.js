'use strict';

const router = require('express').Router();

const dataController = require('./data.controller');

router.get('/', dataController.getOne);

module.exports = router;
