const http = require('http');
const server = http.createServer((req,res)=>{
    // res.end('Response from Http Server');

    if(req.url==='/'){
        res.end('This is home page');
    }else if(req.url=='/about'){
        res.end("this is about page");
    }else if(req.url==='/login'){
        res.end("this is login page");
    }
});
server.listen(3000,()=> console.log("Srever is runnning"));