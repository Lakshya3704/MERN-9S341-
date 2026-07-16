const fs = require('fs');

// Asynchronus Method

// fs.readFile('hello.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Error : ",err);
//         return;
//     }
//     console.log(data);
// })

// fs.writeFile('hello.txt',"Good morning EveryOne", (err)=>{
//     if(err){
//         console.log("Error : ",err);
//         return;
//     }
// })

// fs.appendFile('hello.txt',"First CLass",(err)=>{
//     if(err){
//         console.log("Err: ",err);
//         return;
//     }
//     console.log("appended");
// })

// fs.unlink('hello.txt',(err)=>{
//     if(err){
//         console.log("Error: ", err);
//     }
//     console.log("File deleted");
// })

// Synchronus Method

try{
    const data = fs.readFileSync('hello.txt','utf-8');
    console.log(data);
}catch(err){
    console.log("Error while reading");
}