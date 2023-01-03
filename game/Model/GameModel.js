
// here is games name schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const games = new Schema(
{
name: {
    type:String,
    required: true
  }
  ,
  release_date :{
    type :String,
    required :true
  }
  ,
  compatible:{
    type :String,
    required :true
  }
})
var Model1 = mongoose.model('gameSchema', games);
module.exports = Model1;
