const http = require('http');
const port= 8000;

// To create a server
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("<h1>Hello, Nodejs</h1>");
    }
    res.end();
})

server.listen(port); //this will take the http request from client
console.log(`Server is running on port:${port}`)