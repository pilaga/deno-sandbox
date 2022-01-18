const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hellow world from node');
});

server.listen(3000);