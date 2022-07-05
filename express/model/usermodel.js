const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017",
// {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }

// ).then(()=>{console.log("connection done")}).catch((err)=>{
//   console.log(err)
// })

mongoose.connect("mongodb://localhost/MyUser");
const db=mongoose.connection;
db.on('error',()=>{console.error(error)})
db.once('open',()=>{console.log("Connected to Database")})

const UserinfoSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        validate : {
            validator : (value)=>{
                let hassymbol=true;
            let Symbol=['@','#','$',"%"];
            Symbol.forEach((char)=>{
               if(value.includes(char)){
                 hassymbol=false;
                   return 
               }
            })
                return hassymbol
            },
            message : (props)=>{return props.value+" has special character" }
        }
    },
    password : String
});

module.exports = mongoose.model("userdata",UserinfoSchema)