const jwt=require("jsonwebtoken");

async function authArtist(req,res,next){
    const token =req.cookies.token;
    if(!token) {
        return res.statis(401).json({message:"unauthorized"})


    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role != "artist"){
            return res.status(403).json({message:"you don't have acess"})
        }

        req.user=decoded;



        next()
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"unauthorized"})
    }
}


async function authuser(req,res,next){
    const token=req.cookies.token;

    if(!token){
        res.status(401).json({message:"Unauthorized"})
    }

    try{
const decoded=jwt.verify(token,process.env.JWT_SECRET)
if(decoded.role!="user"){
    return res.status(403).json({message:"you don't have access"})
}
req.user=decoded;

next()
    }
    catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized"})
    }
}
module.exports={authArtist,authuser}