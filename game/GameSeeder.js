const  mongo  = require("mongoose");
const mongoose = require ('./db/dbConnection')
const Game = require('./Model/GameModel')
mongoose().then();
const gameSeeder = [
    new Game ( {
        "name":"pubg",
        "release_date": "2017",
        "compatible": "2.01"
    }),
    new Game ( {
        "name":"Albion Online.",
        "release_date": "2019",
        "compatible": "2.03"
    }),
    new Game ( {
        "name":"Untitled Goose Game.",
        "release_date": "2016",
        "compatible": "2.04"
    }),
    new Game ( {
        "name":"Stardew Valley.",
        "release_date": "2015",
        "compatible": "2.02"
    }),
    new Game ( {
        "name":"Runescape.",
        "release_date": "2014",
        "compatible": "2.01"
    })
]
const seedData = async function(){
    await Game.insertMany(gameSeeder);
}

seedData().then(()=>{
    mongo.connection.close();
})


