const express=require("express")
const app=express();

const route=require("./routes/studentRoute");
app.use("/student",route);


app.listen(8000 ,()=>{
    console.log("server run")
})