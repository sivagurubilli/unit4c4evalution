

const express = require("express")
const mongoose = require("mongoose")

const connect = require("./config/db")
const {register,login} = require("./controller/auth.controller")

const todosController = require("./controller/todo.controller")
const app = express()
app.use(express.json())




app.post("/register",register)
app.post("/login",login)

app.get("/todos",todosController)
app.post("/todos",todosController)
app.get("/todos/:id",todosController)
app.patch("/todos/:id",todosController)
app.delete("/todos/:id",todosController)


app.listen(5000,async(req,res)=>{
    try{
        await connect()
console.log("listening at 5000")
    }catch(err){
        return res.send({err:err.message})
    }
})
