const http = require('http');

// petición get a una api que devuelve una lista de películas
http.get('http://ghibliapi.herokuapp.com/films/', function(response) {
  let data = '';

  // metemos un listener para la recepción de la información
  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    data = JSON.parse(data);
    console.log(data.map( i => i.title));
  });
}).on('error', () => console.log('fuck'));
