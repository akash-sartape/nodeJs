
let readline = require("readline");

let rlinterface = readline.createInterface(process.stdin,process.stdout);
rlinterface.question("Please enter your name: ",(data)=>{
    console.log("hellow "+ data);
    rlinterface.close()
})