var express = require('express');
var router = express.Router();
var { create } = require('../controllers/horoscopeAdminAddController');
const { isAdmin } = require('../controllers/userController');
const isAuth = require('../controllers/userController');
const { userSigninRequired } = require('../controllers/userController');
const { userById } = require('../controllers/userController');

<<<<<<< HEAD
 router.post('/create/:userId/', userSigninRequired, isAdmin, create);
//router.post('/create', create);

=======
router.post('/create/:userId', userSigninRequired, isAdmin, create);
>>>>>>> 4bcc602450adfc7b85c6c89d189f030c9e7a2962
router.param('userId', userById);

module.exports = router;
