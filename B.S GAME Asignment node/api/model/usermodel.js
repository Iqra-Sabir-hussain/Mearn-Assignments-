var mongoose = require("mongoose");
var valid = require("mongoose-unique-validator");
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
var Schema = mongoose.Schema;
var User = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: Number,
    require: true,
  },
  value:[{type:"ObjectId",ref:"Game"}]
});
User.plugin(valid);



