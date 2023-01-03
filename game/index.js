const express = require('express');
const app = express();
const mongoose = require('./db/dbConnection');
const bodyParser = require('body-parser');
const authRoutes = require("./route/route")
const port = 2000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var db = mongoose()
app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'db connected'
    })
});
app.use('/api',authRoutes);
app.listen(port,()=>{
    console.log('working------')
})
