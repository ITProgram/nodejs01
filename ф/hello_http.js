/**
 * Created by MR on 03.09.2016.
 */
var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Http');
});

server.listen(8080);