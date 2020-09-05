const http = require('http');
const { format } = require('path');
const { brotliDecompressSync } = require('zlib');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);
    // this is stament basically mean at the root of the application
    if(req.url === '/'){
        res.write('<h1> made it to the / area </h1>');
        return res.end();
    }
    
    res.write('<h1> made it to the normal section </h1>');
    res.end();
});

server.listen(3000);