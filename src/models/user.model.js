/*firstName ( String, required)
lastName ( String, optional)
email ( String, required)
password ( String, required)
createdAt
updatedAt*/

const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:optional},
    email:{type:String,required:true},
    password:{type:String,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true}

},{
    timestamps:{
        createdAt:true,
        updatedAt:true
    },
    
    versinKey:false
})

const User = mongoose.model("user",userSchema)
module.exports =User