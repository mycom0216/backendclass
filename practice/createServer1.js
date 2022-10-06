const http = require('http');

const server1 = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});

    res.write('<h1>Hello JY</h1>');

    res.end('<p>Bye Hs</p>');
})

server1.listen(8080)

server1.on('listening', () =>{console.log("8080 리스닝 중");});

server1.on('error', (error) => {console.log(error);})





const server2 = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});

    res.write('<h1>Hello JY</h1>');

    res.end('<p>Bye Hs</p>');
})
server2.listen(8081)
server2.on('listening', () =>{console.log("8081 리스닝 중");});
server2.on('error', (error) => {console.log(error);})
