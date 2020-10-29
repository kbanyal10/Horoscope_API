const User = require('../models/userModel');
//const jwt = require('jsonwebtoken');
// const { errorHandler } = require('../helpers/dbErrorHandler');
//const expressJwt = require('express-jwt');

exports.userSignup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400);
    }
    user.hashed_password = undefined;
    user.salt = undefined;

    res.json({
      user,
    });
  });
};
