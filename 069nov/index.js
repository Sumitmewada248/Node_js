// const http=require("http");
// const fs=require("fs");
// http.createServer((req,res)=>{
// fs.readFile("my.txt",(err,data)=>{
//     res.write(data);
//     res.end();
// })
// }).listen(5000);



const fs=require("fs")

fs.appendFile("my.pdf","hello we are mern student",(err)=>{
    if (err)throw err;
    console.log("File Sussesfully creater!!!");

} )

fs.appendFile("our.txt","hello we are mern student",(err)=>{
    if (err)throw err;
    console.log("File Sussesfully creater!!!");

} )