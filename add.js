function Add(arg1,arg2){
    sum=parseInt(arg1)+parseInt(arg2);
   return sum;
}
// console.log(Add(process.argv[2],process.argv[3]))
// Add(5,8)

let readline=require("readline");

let rlinterface=readline.createInterface(process.stdin,process.stdout);
rlinterface.question("What is ypur name ",(name)=>{
    console.log("Welcome " + name);
    rlinterface.close();
})