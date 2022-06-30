const express = require("express");
let usercontroller = require("./user")
let app = express();
app.listen(3001);
app.use(express.json())

app.get("/",(req,res)=>{
  // console.log (req.query) ;
  let userdata =[{
    name:"Akash", age : "25"
  },{
    name:"Shubham", age : "24"
  },{
    name:"Vishal", age : "26"
  }
]
 let filterdata=userdata.filter((user)=>{
    return user.name==req.query.name;
    //return user.name.includes(req.query.name)**// it chakes for perticular char or word in that input/data it is case sensetive.
 })
   res.send(userdata)
})

app.use("/user",usercontroller)