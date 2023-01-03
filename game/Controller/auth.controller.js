const User = require('./../Model/Usermodel')
const Game = require('./../Model/GameModel')
const GameType = require('./../Model/GameTypes.model')
exports.signup = async function (req, res)
{
  let  username = req.body.username ;
  let  email = req.body.email ;
  let  password = req.body.password ;
  let  confirm_password = req.body.confirm_password;
  let  gameType = req.body.gameType;
  let newUser = new User({
    username,
    email,
    password,
    confirm_password,
    gameType
    
  })
  await newUser.save()
  return res.status(200).json({
    message: 'User Added',
  })

}