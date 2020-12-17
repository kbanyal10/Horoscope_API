const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const Horoscope = require('../models/horoscopeModel');

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded',
      });
    }
    let horoscope = new Horoscope(fields);

    if (files.photo) {
      horoscope.photo.data = fs.readFileSync(files.photo.path);
      horoscope.photo.cotentType = files.photo.type;
    }

    horoscope.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: 'Failed!',
        });
      }
      res.json(result);
    });
  });
};
