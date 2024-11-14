const express=require("express");
const route=express.Router();

route.get("/stuinfo",(req, res)=>{
    res.send("This is the Student Information")
})

module.exports=route;