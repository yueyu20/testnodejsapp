const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let time = new Date();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>'+ time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + '</h1>');
    res.end('<p></p>');
});

server.listen(port,() => {
    console.log("listening");
    console.log(`Server running at port `+ port);
});


/*http.createServer(function(request, response) {
    let time = new Date()
    response.writeHead(200,{'Content-type' : 'text/plain'});
    response.write("Response's coming from server ... \n");
    response.write(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    response.end();
    }
).listen(8888);
console.log('listening');
*/