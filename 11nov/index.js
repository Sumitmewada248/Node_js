const fs=require("fs");


// fs.open("ram.txt", "w", (err)=>{
//   if(err) throw err;
//     console.log("file sussesfull created !!!")
//})


fs.writeFile("ranu.txt", "welcome back", (err)=>{
    if(err) throw err;
    console.log("file sussesfull created !!!")
})
