var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})

app.listen(3000 ,function() {
    console.log('Server app running on port 3000');
})

/* const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'test/plain');
    res.end("Hello word");
});

server.listen(port, hostname,() => {
    console.log('server running at https://' + hostname + ':' + port + '/')
}); */