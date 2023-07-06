const service = require('../service/animeService');
const Anime = require('../models/anime');


const homeController = (req, res) => {
  res.render('home', {
    title: 'APP animes'
  });
}

const getAllAnimesController = (req, res) => {
    service.readJSON('../anime.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }

        const animes = Object.entries(data).map(([id, animeObj]) => {
            const anime = new Anime(animeObj.nombre, animeObj.genero, animeObj['año'], animeObj.autor);
            anime.id = id;
            return anime;
        });

        res.render('readAnimes', {
            title: 'Listado de animes',
            listAnimes: animes
        });
    });
};

const getAnimeByIdController = (req, res) => {
    const animeId = req.params.id;

    service.readJSON('../anime.json', (err, data) => {
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
};

const renderAddAnimeController = (req, res) => {
    res.render('addAnime', {
        titulo: 'Agregar anime',
        error: null
    });
};

const addAnimeController = (req, res) => {
    const { nombre, genero, año, autor } = req.body;

    service.readJSON('../anime.json', (err, data) => {
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
            const newAnime = new Anime();
            newAnime.nombre = nombre;
            newAnime.genero = genero;
            newAnime.año = año;
            newAnime.autor = autor;

            animes[newAnimeId] = newAnime;

            service.writeJSON('../anime.json', animes, (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error al guardar el archivo JSON');
                    return;
                }

                res.redirect('/animes');
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error');
        }
    });
}

const renderModifyAnimeController = (req, res) => {
    service.readJSON('../anime.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }

        const animes = Object.entries(data).map(([id, animeObj]) => {
            const anime = new Anime(animeObj.nombre, animeObj.genero, animeObj['año'], animeObj.autor);
            anime.id = id;
            return anime;
        });
        res.render('modifyAnime', {
            titulo: 'Modificar anime',
            listAnimes: animes
        });
    });
};

const modifyAnimeController = (req, res) => {
    const animeId = req.params.id;
    const { nombre, genero, año, autor } = req.body;

    service.readJSON('../anime.json', (err, data) => {
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

            service.writeJSON('../anime.json', animes, (err) => {
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
};

const renderDeleteAnimeController = (req, res) => {
    service.readJSON('../anime.json', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error');
            return;
        }

        const animes = Object.entries(data).map(([id, animeObj]) => {
            const anime = new Anime(animeObj.nombre, animeObj.genero, animeObj['año'], animeObj.autor);
            anime.id = id;
            return anime;
        });
        res.render('deleteAnime', {
            titulo: 'Eliminar anime',
            listAnimes: animes
        });
    });
};

const deleteAnimeController = (req, res) => {
    const animeId = req.params.id;
    service.readJSON('../anime.json', (err, data) => {
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

            service.writeJSON('../anime.json', animes, (err) => {
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
};


module.exports = {
  homeController,
  getAllAnimesController,
  getAnimeByIdController,
  renderAddAnimeController,
  addAnimeController,
  renderModifyAnimeController,
  modifyAnimeController,
  renderDeleteAnimeController,
  deleteAnimeController
};
