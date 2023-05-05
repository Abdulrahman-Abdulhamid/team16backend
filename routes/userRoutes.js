const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router
  .route('/:id/:watchlist')
  .get(userController.getUserWatchlist);

router
  .route('/addtowatchlist/:id/:watchlist/:mediaid')
  .patch(userController.addtoWatchlist);

router
  .route('/removefromwatchlist/:id/:watchlist/:mediaid')
  .patch(userController.removeFromWatchlist);

module.exports = router;
