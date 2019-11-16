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

// metemos middlewares
app.get('/authenticate', authenticate, respond);

function authenticate (req, res, next) {
  const { auth } = req.query;
  auth === 'admin'
    ? next()
    : res.status(403).send('Nice try')
}

function respond (req, res) {
  res.status(200).send('You\'re in');
}

// si queremos que se use en toda la app podemos hacer
// app.use(authenticate)

// para definir middlewares para los parámetros de la url:
app.param(':user_id', (req, res, next) => {
  // podemos modificar la request para usar los datos
  // req.user_id = req.params.user_id;
  console.log(req.params.user_id);
  next();
});

app.listen(3000, () => console.log('Listening on port 3000'));
