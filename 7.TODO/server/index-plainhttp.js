const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method}, ${req.url}`);
    
    if(req.method === 'GET' && req.url === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World!\n');
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const PORT = 3000 || process.PORT;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});