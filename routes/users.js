var express = require('express');
const { userSignup } = require('../controllers/userController');
const { userSignupValidator } = require('../validator/userSignupValidation');
const { Usersignin } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/signup', userSignupValidator, userSignup);
router.post('/signin', Usersignin);

module.exports = router;
