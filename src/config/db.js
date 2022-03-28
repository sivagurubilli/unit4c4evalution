const mongoose = require("mongoose")

const connect = ()=>{
  return mongoose.connect("mongodb+srv://gurubilli:gurubilli@cluster0.dlpod.mongodb.net/unit4c3eval?retryWrites=true&w=majority")
}

module.exports = connect