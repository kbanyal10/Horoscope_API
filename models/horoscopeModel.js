const mongoose = require('mongoose');

const horoscopeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Horoscope', horoscopeSchema);
