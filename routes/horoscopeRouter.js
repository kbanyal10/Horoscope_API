var express = require('express');
var router = express.Router();
const horoscopeByName = require('../controllers/horoscopeInfo');
const horoscopeData = require('../models/horoscopeModel');
const { userSigninRequired } = require('../controllers/userController');


router.get('/:name',function (req, res) {
  var horoscopeToFind = req.url.replace('/', '');
  var name = horoscopeToFind.replace('/', '');
  horoscopeData.findOne({ name: `${name}` }, function (
    err,
    horoscope,
  ) {
    if (!horoscope) {
      res.send('Something went wrong or this horoscope is not created yet!');
      console.log(name);
    } else {
      res.send(horoscope);
    }
  });
});

// router.param('id', horoscopeByName);

module.exports = router;
