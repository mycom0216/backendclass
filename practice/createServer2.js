const http = require('http');
const fs = require('fs').promises 

const server1 = http.createServer(async (req, res) => {
    const data = await fs.readFile('./server2.html');
    try {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    
    res.end(data);
    } catch(err) {
        console.log(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
});

server1.listen(8080);

server1.on('listening', () =>{console.log("8080 리스닝 중");});
