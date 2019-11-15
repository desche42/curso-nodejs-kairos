const http = require('http');
const url = require('url');


const demoURL = 'http://localhost:3000/ruta?parametro=dato#detalle';
const parsedUrl = url.parse(demoURL, true);

const server = http.createServer((req, res) => {
  const { url: myUrl } = req;
  const { pathname } = url.parse(myUrl);

  if (pathname === '/json') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({foo: 'bar'}));
  } else {
    res.end('this is a string');
  }
});

server.listen(3000);
