const fs=require("fs");

fs.unlink("ranu.txt" ,(err)=>{
    if(err)throw err;
    console.log("file Deleted")
})