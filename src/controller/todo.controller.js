

const express = require("express")
const { appendFile } = require("fs")

router  = express.Router()

const todo = require("../models/todo.model")



router.get("",async(req,res)=>{
    try{
   const todos = await Todos.find().lean().exec()
   return res.send(todos)
    }catch(err){
        return res.send(err.message)
    }
})


router.post("",async(req,res)=>{

try{
    const todo = await Todos.create(req.body)
    return res.send(todo)
     }catch(err){
         return res.send(err.message)
     }
 })


 
