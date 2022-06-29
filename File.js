const fs = require('fs');
//Async approach or noblocking approach
// console.log("File Reading started")
// fs.readFile("test.txt", 'utf-8', (err, fileData)=> {
//    if(err) {
//     console.log(err);
//    } else {
//       console.log(fileData) 
//    }
// });
// console.log("File Reading ended")
//blocking code
// console.log("File Reading started");
// //blocking user node execution
// let data;
// try {
//     data = fs.readFileSync('tes.txt', 'utf-8');
// } catch (err) {
//     console.log(err)
// }

// console.log(data);
// console.log("File Reading ended");

//Promise Approach
// fs.readFile("test.txt","utf-8").then((data)=> {
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// })

// //async await approach
// async function getData() {
//     const fileData = await fs.readFile("test.txt", "utf-8");
//     console.log(fileData);
// }
// getData();
// const content = `I am student of 10x\nits multiline content`

// fs.writeFile("test1.txt",content, (err, data)=> {
//     console.log(err, data);
// });
fs.readdir("./",{withFileTypes: true},(err, files)=> {
    if(err) {
        console.log(err)
     } else {
         files.forEach((file)=> {
             const type = file.isDirectory();
             console.log(type);
        })
     }

});