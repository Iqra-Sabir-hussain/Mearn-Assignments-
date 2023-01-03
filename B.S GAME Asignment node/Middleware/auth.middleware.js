exports.auth = (req,res,next)=>{
    if(req.headers.token){
        req.name ='IQRA';
        next();
    }else{
        return res.status(401).json({
                message:'Please Login First'
        })
    }
}