const http=require("http");
const fs=require("fs");
http.createServer((req,res)=>{
fs.readFile("my.txt",(err,data)=>{
    res.write(data);
    res.end();
})
}).listen(5000);