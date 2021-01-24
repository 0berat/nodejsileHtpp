const http = require('http'); //nodejs ile birlikte gelen default paket modül

const server = http.createServer((request,response) => {
    console.log("bir istekte hbüüuelueeeenuldu")
    //console.log(request.url)
    console.log(request.headers);
    response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
    response.write("<b> salamaaaa dünya </b>");
    response.end();

});

server.listen(2000);