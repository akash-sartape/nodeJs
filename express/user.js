const express = require("express");
const userInfo = require("./model/usermodel");
const mongoose=require("mongoose")

const router = express.Router();
const users=[]
// router.get("/",(req,res)=>{
//    res.send("This is user route");
// })

// router.get("/update",(req,res)=>{
//     res.send("this is update route ")
// })
// router.post("/createuser",(req,res)=>{
//    users.push(req.body);
// //    res.send(req.body.username+" created successfully");
//    res.send(users)
// })
// router.post("/login",(req,res)=>{
//    users.forEach((user)=>{
//     if(user.username===req.body.username){

//         if(user.password===req.body.password){
//             res.send("login sucessfull")
//         }else{
//             res.send("please enter valid password")
//         }

//     }else{
//         res.send("please enter valid username")
//     }
//    })
//  })

const CheckExistingUser = async (username)=>{
  let userexist = false;
 await userInfo.find().then((users)=>{
      for(i=0;i<users.length;i++){
        if(username.toLowerCase()===users[i].username.toLowerCase()){
          userexist=true;
          break;
        }
      }
  })
  return userexist
}
 
router.post("/createuser",async (req,res)=>{
  if(await CheckExistingUser(req.body.username)){
         res.send(req.body.username+" already exist")
  } else{
    userInfo.create({username : req.body.username ,password: req.body.password}).then((data)=>{
      res.send(req.body.username+" created successfully")
   }).catch((err)=>{
     res.send(err.message)
   })
  }



router.get("/getdata",(req,res)=>{
     userInfo.find().then((userdata)=>{
      res.send(userdata)
     })
})


// users.push(req.body);
// res.send(users)

})
router.put("/resetpassword",(req,res)=>{
  userInfo.updateOne({username:req.body.username , password:req.body.newpassword}).then((data)=>{
           res.send("Password Update Succesfully")
  })

})
router.delete("/delete",(req,res)=>{
  userInfo.deleteOne({username:req.body.username}).then((data)=>{
    res.send("Deleted successfully")
  })
})



module.exports=router;