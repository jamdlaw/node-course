const http = require('http');
const { format } = require('path');
const { brotliDecompressSync } = require('zlib');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    console.log(url, method);
    // this is stament basically mean at the root of the application
    if( url === '/'){
        res.write('<html>');
        res.write('<head><title> Enter Message </title> </head>');
        res.write('<body><form action="/message" method="POST"><input type="text"></input><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        //req.on('data');
        
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    res.write('<h1> made it to the normal section </h1>');
    res.end();
});

server.listen(3000);