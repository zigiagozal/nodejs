var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    id:String,
    language:String,
    word:String,
    created:Date
});

module.exports = mongoose.model('wordsModel',ProductSchema);