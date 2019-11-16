const express = require('express');
const path = require('path');

// cosillas de seguridad
const helmet = require('helmet');

const app = express();
app.use(helmet());

// podemos definir variables globales a nivel de app
app.locals.title  = 'My App';

// definimos dónde vamos a tner las vistas
app.set('views', path.join(__dirname, 'views'));

// definimos la ruta index
app.get('/', (req, res) => {
  const { query } = req;
  res.json(query)
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.listen(3000, () => console.log('Listening on port 3000'));
