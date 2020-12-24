var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    id:String,
    userID:String,
    points:String,
    created:Date
});

module.exports = mongoose.model('resultsModel',ProductSchema);