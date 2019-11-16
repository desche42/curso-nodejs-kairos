const express = require('express');
const router = express.Router();

const app = express();

router.get('/', (req, res) => {
  res.send('Which user?')
});

router.get('/detail', (req, res) => {
  res.send('User name is Sghsgs')
});

// usamos el router solo para las rutas que sigan a user
app.use('/user', router);

app.listen(3000, () => console.log('Listening on port 3000'));
