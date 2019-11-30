const express = require('express');

const app = express();

const logger = (history = []) => (req, res, next) => {
  const trace = `[${req.method}] ${req.url}`

  history.push({
    request: req,
    trace
  });
  next();
}

app.use(logger);

app.get('/', function(req, res) {
  res.send(`Hi!`);
});

app.listen(3000);
