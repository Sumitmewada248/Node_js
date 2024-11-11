const fs=require("fs");

fs.rename("raja.txt" ,"radha.txt",(err)=>{
    if(err)throw err;
    console.log("file rename")
})