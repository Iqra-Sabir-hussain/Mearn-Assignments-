const mongoose = require("mongoose");
const types = require("./api/Model/typeModel");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://iqra:Seeder123@clusterseederdata.lkglb5w.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const Games1 = [
  {
    gamename: [
      { gamenames: "Football",Releazedate:"06-12-1998",Rating:4},
      { gamenames: "Basketball",Releazedate:"06-3-1998",Rating:3},
      { gamenames: "batminten",Releazedate:"06-4-1998",Rating:5},
    ],
  },
  {
    gamename: [
        { gamenames: "Tekken3",Releazedate:"10-5-2000",Rating:2},
        { gamenames: "pubg",Releazedate:"04-10-2001",Rating:3},
        { gamenames: "fighter",Releazedate:"04-10-2010",Rating:5},
      ],
  },
  {
       gamename: [
        { gamenames: "BubleShotr",Releazedate:"07-5-2004",Rating:4},
        { gamenames: "tekken1",Releazedate:"08-1-2003",Rating:4},
        { gamenames: "Pubg",Releazedate:"04-7-2005",Rating:5},
     ],
  },

];





const use = async () => {
await types.insertMany(Games1);
let len= await types.count(Games1);
console.log(len);

};
use().then(() => {
  mongoose.connection.close();
});