const express = require('express');
const router = express.Router();
const utils = require('../utils/utils');


// leer animes XD ruta http://localhost:3000/animes
router.get('/', (req, res) => {
  utils.readJSON('../anime.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }
    res.json(data);
  });
});



// leer anime en especifico ruta http://localhost:3000/animes/:id
router.get('/:id', (req, res) => {
  const animeId = req.params.id;

  utils.readJSON('../anime.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }

    try {
      const animes = data;
      const anime = animes[animeId];
      if (!anime) {
        res.status(404).send('Anime no encontrado');
        return;
      }
      res.json(anime);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
});


//agregar
router.post('/', (req, res) => {
  const { nombre, genero, año, autor } = req.body;

  utils.readJSON('../anime.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }

    try {
      const animes = data;
      let lastAnimeId = 0;

      for (const animeId in animes) {
        const id = parseInt(animeId);
        if (id > lastAnimeId) {
          lastAnimeId = id;
        }
      }

      const newAnimeId = lastAnimeId + 1;
      const newAnime = { id: newAnimeId, nombre, genero, año, autor };
      animes[newAnimeId] = newAnime;

      utils.writeJSON('../anime.json', animes, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al guardar el archivo JSON');
          return;
        }

        res.status(201).json({ mensaje: 'Anime agregado exitosamente' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
});



//modificar
router.put('/:id', (req, res) => {
  const animeId = req.params.id;
  const { nombre, genero, año, autor } = req.body;

  utils.readJSON('../anime.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }

    try {
      const animes = data;
      const anime = animes[animeId];

      if (!anime) {
        res.status(404).json({ mensaje: 'Anime no encontrado' });
        return;
      }

      anime.nombre = nombre;
      anime.genero = genero;
      anime.año = año;
      anime.autor = autor;

      utils.writeJSON('../anime.json', animes, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al guardar el archivo JSON');
          return;
        }

        res.status(200).json({ mensaje: 'Anime modificado exitosamente' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
});


//borrar
router.delete('/:id', (req, res) => {
  const animeId = req.params.id;

  utils.readJSON('../anime.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error');
      return;
    }

    try {
      const animes = data;
      const anime = animes[animeId];

      if (!anime) {
        res.status(404).json({ mensaje: 'Anime no encontrado' });
        return;
      }

      delete animes[animeId];

      utils.writeJSON('../anime.json', animes, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error al guardar el archivo JSON');
          return;
        }

        res.status(200).json({ mensaje: 'Anime eliminado exitosamente' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  });
});


module.exports = router;
