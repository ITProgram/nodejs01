var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

handle["/removeService"] = requestHandlers.removeService;
handle["/sendjson"] = requestHandlers.sendjson;
handle["/jquery"] = requestHandlers.sendjquery;
//handle["/sendtext"] = requestHandlers.sendtext;

server.start(router.route, handle);