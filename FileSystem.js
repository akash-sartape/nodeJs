let fs = require("fs/promises");

                       // ********** HANDLE DATA ASYNCHRONOUSLT*************
// console.log("start read file")
// fs.readFile("test1.txt",'utf-8',(error,data)=>{
//  if(error){
//     console.log(error)
//  }else{
//     console.log(data)
//  }
// })
// console.log("end read file")

                           //************  HANDLE DATA SYNCHRONOUSLY**********

// console.log("Start Read File");
// let filedata;
// try{
//      filedata = fs.readFileSync("test1.txt",'utf-8');
//      console.log(filedata)
// }catch(err){
//    console.log(err)
// }


// console.log("End Reading file")

                           // ************* Handle Using Promisses..********  rimider====use(fs/promises)
// console.log("Start")
//  fs.readFile("test1.txt",'utf-8').then((data)=>{
//      console.log(data)
//  }).catch((err)=>{
//      console.log(err)
//  })
//  console.log("End")

                         //***************Handeling using Async Await********** */

// async function getdata(){
//    let data=await fs.readFile("test1.txt",'utf-8')
//  console.log(data)
  
// }
// getdata()
                        //*********WRITE FILE*************************** */

 