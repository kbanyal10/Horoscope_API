const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
// const { errorHandler } = require('../helpers/dbErrorHandler');
const expressJwt = require('express-jwt');

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

exports.Usersignin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: 'User with that email does not exist.',
      });
    }
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password does not match',
      });
    } else {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      res.cookie('t', token, { expire: new Date() + 9999 });
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, email, name, role } });
    }
  });
};

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    req.profile = user;
    next();
  });
};
exports.userSigninRequired = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'auth',
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id === req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: 'Access Denied',
    });
  } else {
    next();
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: 'Admin level access required! Access Denied',
    });
  } else {
    next();
  }
};
