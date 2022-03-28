

const User = require("../models/user.model")

const jwt = require("jsonwebtokens")




const register = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user){
            res.send({message:"email already exists"})
        }
if(!user){
    let user = User.create(req.body)

}

const Token = gentoken(user)
    }catch(err){
        res.send(err.message)
    }
}