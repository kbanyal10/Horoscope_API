var express = require('express');
var router = express.Router();
var { create } = require('../controllers/horoscopeAdminAddController');
const { isAdmin } = require('../controllers/userController');
const isAuth = require('../controllers/userController');
const { userSigninRequired } = require('../controllers/userController');
const { userById } = require('../controllers/userController');

router.post('/create/:userId', userSigninRequired, isAdmin, create);
router.param('userId', userById);

module.exports = router;
