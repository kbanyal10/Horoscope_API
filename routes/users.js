var express = require('express');
const { userSignup } = require('../controllers/userController');
const { userSignupValidator } = require('../validator/userSignupValidation');
const { Usersignin } = require('../controllers/userController');
var router = express.Router();
const { userById } = require('../controllers/userController');
const {userSigninRequired} = require('../controllers/userController');


/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', userSignupValidator, userSignup);
router.post('/signin', Usersignin);
router.get('/secret/:userId', userSigninRequired, (req, res) => {
    res.json({
      user: req.profile,
    });
  });
  router.param('userId', userById);

module.exports = router;
