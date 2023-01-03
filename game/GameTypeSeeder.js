const mongo = require('mongoose');
const mongoose = require('./db/dbConnection');
const GameType = require('./Model/GameTypes.model')

mongoose().then();

const GameTypeSeeder = [
    {
        "gameType":"Shooter"
    },
    {
        "gameType":"Fighter"
    },
    {
        "gameType":"puzzle"
    }
]

const seedData = async function(){
    await GameType.insertMany(GameTypeSeeder);
}

seedData().then(()=>{
    mongo.connection.close();
})