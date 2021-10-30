var http = require("http");
var data = { key: "value", hello: "world" };
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("hello,world 世界");
    res.end();
  })
  .listen(9000);

