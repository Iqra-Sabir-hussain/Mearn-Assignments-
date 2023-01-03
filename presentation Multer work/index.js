var path = require ('path')
var express =require('express')
var multer = require('multer')
var app = express()
app.use(express.static(__dirname + "/public"));
var storage = multer.diskStorage({
    destination : "/public/uploads",
    filename:(req,file,cb)=>
    {
        console.log(file)
        cb(null,file.filename +"_"+Date.now()+path.extname(file.originalname));
    }
})

var upload = multer({
    storage : storage
}).single()





app.post('/uploadFile',upload ,(req,res,next)=>{
    res.send("Uploaded File" + res.file);


})

app.listen(3000,()=>
{
    console.log("Server runing at localhost 3000")
})