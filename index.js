var server = require("./server");
var router = require("./router");
var requestHandles = require("./requestHandles");

var handle = {};
handle['/'] = requestHandles.start;
handle['/start'] = requestHandles.start;
handle['/upload'] = requestHandles.upload;

server.start(router.route, handle);