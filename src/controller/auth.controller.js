

const User = require("../models/user.model")

const jwt = require("jsonwebtokens")
const { ReadableStreamBYOBRequest } = require("stream/web")

const gentoken = (user)=>{
    return jwt.sign({user},process.env(secretkey))
}


const register = async(req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user){
          return  res.send({message:"email already exists"})
        }
if(!user){
    let user = User.create(req.body)

}

const Token = gentoken(user)
    }catch(err){
       return res.send(err.message)
    }
}



const login  =  async(req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        })

        if(!user){
            return res.send({message:"user not fouund"})
        }
        const checkpassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if(!checkpassword){
            return res.send("invalid password")
        }
    }catch(err){
        return res.send(err.message)
    }
}


module.exports  = {register,login}