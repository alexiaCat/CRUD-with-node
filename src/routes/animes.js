const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


// leer animes XD ruta http://localhost:3000/animes
router.get('/', (req, res) => {
    const jsonFilePath = path.join(__dirname, '../json/anime.json');

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }

        try {
            const animes = JSON.parse(data);
            res.json(animes);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error');
        }
    });
});

// leer anime en especifico ruta http://localhost:3000/animes/:id
router.get('/:id', (req, res) => {
    const animeId = req.params.id;
    const jsonFilePath = path.join(__dirname, '../json/anime.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }
        try {
            const animes = JSON.parse(data);
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

    res.send('Agregar anime');
});

//eliminar
router.put('/:id', (req, res) => {
    const animeId = req.params.id;

    res.send(`Actualizar anime ${animeId}`);
});

//borrar
router.delete('/:id', (req, res) => {
    const animeId = req.params.id;

    res.send(`Eliminar anime ${animeId}`);
});

module.exports = router;
