var express = require('express');
var router = express.Router();
const mapsCtrl = require('../controllers/maps')

router.get('/', mapsCtrl.index);

module.exports = router;