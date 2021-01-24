const http = require('http'); //nodejs ile birlikte gelen default paket modül
const fs = require('fs');
console.log(__dirname)
const server = http.createServer((request,response) => {
    console.log("bir istekte bulunuldu")

    response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    fs.readFile('/home/cubee/WebstormProjects/nodejsilehttp/htmlDökümanınıServeEtmek/index.html', (err, data) => {
        if (err)
            throw err;
        response.end(data);
    });


});

server.listen(3000);