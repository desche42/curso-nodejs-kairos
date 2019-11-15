const http = require('http');

// respuesta texto simple
function createSimpleServer () {
  return http.createServer((req, res) => {
      res.end('Hello kitty');
  });
}

// respuesta json
function createJsonServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({foo: 'bar'}));
  });
}

const selectedServer = createJsonServer;
selectedServer().listen(3000);
