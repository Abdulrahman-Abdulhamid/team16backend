const express = require('express');
const mediaController = require('../controllers/mediaController');

const router = express.Router();

router
  .route('/')
  .get(mediaController.getAllMedia)
  .post(mediaController.createMedia);

router
  .route('/genre/:genreType')
  .get(mediaController.getMediaByGenre);

router
  .route('/title/:title')
  .get(mediaController.getMediaByImage);

router
  .route('/:id')
  .get(mediaController.getMedia)
  .patch(mediaController.updateMedia)
  .delete(mediaController.deleteMedia);

module.exports = router;
