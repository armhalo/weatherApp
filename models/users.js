var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
  });
 
 var usersModel = mongoose.model('users', usersSchema);

 module.exports = usersModel;