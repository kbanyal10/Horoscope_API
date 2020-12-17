var express = require('express');
var router = express.Router();
const horoscopeByName = require('../controllers/horoscopeInfo');
const horoscopeData = require('../models/horoscopeModel');
const { userSigninRequired } = require('../controllers/userController');


<<<<<<< HEAD
router.get('/:name',function (req, res) {
  var horoscopeToFind = req.url.replace('/', '');
  var name = horoscopeToFind.replace('/', '');
  horoscopeData.findOne({ name: `${name}` }, function (
=======
router.get('/:name', userSigninRequired,function (req, res) {
  var horoscopeToFind = req.url.replace('/', '');
  horoscopeData.findOne({ name: `${horoscopeToFind}` }, function (
>>>>>>> 4bcc602450adfc7b85c6c89d189f030c9e7a2962
    err,
    horoscope,
  ) {
    if (!horoscope) {
<<<<<<< HEAD
      res.send('Something went wrong or this horoscope is not created yet!');
      console.log(name);
=======
      res.send('Something Went wrong or this horoscope is not created yet!');
      console.log('');
>>>>>>> 4bcc602450adfc7b85c6c89d189f030c9e7a2962
    } else {
      res.send(horoscope);
    }
  });
});

// router.param('id', horoscopeByName);

module.exports = router;
