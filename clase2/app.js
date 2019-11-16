const express = require('express');

const app = express();

// definimos la ruta index
app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});


app.listen(3000);
