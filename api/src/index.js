const http = require('http');

const PORT = process.env.PORT || 3000;

const requestListener = function (_, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(PORT);