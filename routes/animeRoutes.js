const express = require('express');
const router = express.Router();
const {
    homeController,
    getAllAnimesController,
    getAnimeByIdController,
    renderAddAnimeController,
    addAnimeController,
    renderModifyAnimeController,
    modifyAnimeController,
    renderDeleteAnimeController,
    deleteAnimeController
  } = require('../controllers/animeController');



router.get('/', homeController);
router.get('/animes', getAllAnimesController);
router.get('/animes/search/:id', getAnimeByIdController);
router.get('/animes/addAnime', renderAddAnimeController);
router.post('/animes', addAnimeController);
router.get('/animes/modifyAnime', renderModifyAnimeController);
router.put('/animes/:id', modifyAnimeController);
router.get('/animes/deleteAnime', renderDeleteAnimeController);
router.delete('/animes/:id', deleteAnimeController);


module.exports = router;