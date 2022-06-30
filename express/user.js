const express = require("express");

const router = express.Router();
const users=[]
router.get("/",(req,res)=>{
   res.send("This is user route");
})

router.get("/update",(req,res)=>{
    res.send("this is update route ")
})
router.post("/createuser",(req,res)=>{
   users.push(req.body);
//    res.send(req.body.username+" created successfully");
   res.send(users)
})
router.post("/login",(req,res)=>{
   users.forEach((user)=>{
    if(user.username===req.body.username){

        if(user.password===req.body.password){
            res.send("login sucessfull")
        }else{
            res.send("please enter valid password")
        }

    }else{
        res.send("please enter valid username")
    }
   })
 })

module.exports=router