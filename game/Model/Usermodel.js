var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var User = new Schema({
    username:{ 
        type: String,
        require :true,
    },
    email:{
        type:String,
        require :true,

    },
    password :{
        type:String,
        require :true
    },
    gameType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"GameTypeSchema"
    }
})

var Model = mongoose.model('User', User);
module.exports = Model;