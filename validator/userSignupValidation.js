const User = require('../models/userModel');

exports.userSignupValidator = (req, res, next) => {
  const { name, email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (user) {
      return res.status(409).json({
        error: 'User with that email already exists',
      });
    }

    if (err) {
      return res.status(422).json({
        error: 'User data was not be able to process right',
      });
    }
  });

  req.check('name', 'Name is required').notEmpty();
  req
    .check('email', 'Email must be valid')
    .matches(/.+\@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
      min: 4,
      max: 32,
    });
  req.check('password', 'Password is required').notEmpty();
  req
    .check('password')
    .isLength({ min: 6 })
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number');
  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
