const express = require('express');
const app = express();


app.use(express.json());

const usersRouter = require('./routes/animes');
app.use('/animes', usersRouter);

const server = app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

module.exports = app;