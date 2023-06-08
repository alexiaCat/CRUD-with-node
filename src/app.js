const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Empezando el proyecto');
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
