var express = require('express');
var router = express.Router();
const horoscopeByName = require('../controllers/horoscopeInfo');
const horoscopeData = require('../models/horoscopeModel');
const { userSigninRequired } = require('../controllers/userController');


router.get('/:name', userSigninRequired,function (req, res) {
  var horoscopeToFind = req.url.replace('/', '');
  horoscopeData.findOne({ name: `${horoscopeToFind}` }, function (
    err,
    horoscope,
  ) {
    if (!horoscope) {
      res.send('Something Went wrong or this horoscope is not created yet!');
      console.log('');
    } else {
      res.send(horoscope);
    }
  });
});

// router.param('id', horoscopeByName);

module.exports = router;
