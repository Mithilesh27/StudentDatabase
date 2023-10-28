const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const studentRoute = require('./studentRoutes/studentRoutes');
const app=express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://mithileshchirtani:Mithilesh27@cluster0.ngavppw.mongodb.net/School");
const db=mongoose.connection;
db.on("open",()=>{
    console.log("Database connected");
})
db.on("error",()=>{
    console.log("Error while connecting to Database");
})
app.use(express.json());
app.use(cors());
app.use("/students",studentRoute);
const port=5500;
app.listen(port,(req,res)=>{
    console.log("Server started on "+ port);
})
