var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
firstname:String,
larstname:String,
gmail:String,
nickname:String,
gender:String,
password:String,
created:Date
});

module.exports = mongoose.model('usersModel',ProductSchema);