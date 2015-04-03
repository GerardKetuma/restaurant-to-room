var User = require('../models/user').User;

exports.addUser = function(user, next) {
  var newUser = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    roomNumber: user.roomNumber,
    email: user.email,
    password: user.password
  });

  newUser.save(function(err) {
    if (err) {
      return next(err);
    }
    next(null);
  });
}
