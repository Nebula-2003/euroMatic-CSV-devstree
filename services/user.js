const userModel = require('../models/users.js');

exports.createUser = async (userData) => await userModel.create([userData]);
