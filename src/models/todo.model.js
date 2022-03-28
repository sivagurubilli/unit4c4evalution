
const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
    title:{type:String,required:true},
    user_id:{type:mongoose.Types.ObjectId,ref:"User"},
    todo_id:{type:mongoose.Types.ObjectId,ref:"Todo"}

},{
    timestamps:true
})

const Todo = mongoose.model("todo",todoSchema)

module.exports = Todo