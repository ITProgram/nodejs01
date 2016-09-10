
var http = require("http");
var fs = require('fs');
var url = require("url");
http.createServer(function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Получен запрос " + pathname);
    fs.readFile('index.html', 'utf8', function (error, data) {
        if (error) {
            console.log('Could not find or open file for reading\n');
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    })
}).listen(8080);