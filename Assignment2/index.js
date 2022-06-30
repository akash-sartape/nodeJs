let fs = require("fs");
let htttp=require("http");
let express=require("express")
let app=express();
app.listen(8000);

fs.writeFile("index.html",'<h1>Hellow World</h1><p> I am Akash</p>' ,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  else{
    console.log("file Created")
  }
})


// htttp.createServer((req,res)=>{
//     fs.readFile("index.html",'utf-8',(err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         else{
           
//             res.end(data);
            
//         }
//     })
// }).listen(8008);

app.get("/",(req,res)=>{
  fs.readFile("index.html",'utf-8',(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
               
              res.send(data)
                
            }
          })
     
})