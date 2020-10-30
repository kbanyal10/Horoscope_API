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
