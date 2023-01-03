// here is game type schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const GameType = new Schema(
{
gameType: {
    type:String,
    required: true
  },
  game:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game"
  }
})

var Model = mongoose.model('GameTypeSchema', GameType);
module.exports = Model;
