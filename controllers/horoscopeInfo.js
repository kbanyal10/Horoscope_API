const horoscopeData = require('../models/horoscopeModel');

// exports.horoscopeByName =(req, res, next, id) => {
//     horoscopeData.findById(id).exec((err, user) => {
//       if (err || !user) {
//         return res.status(400).json({
//           error: 'User not found',
//         });
//       }
//       console.log(user);
//       next();
//     });
//   };