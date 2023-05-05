const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

router
  .route('/:id')
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

router
  .route('/media/:mediaid')
  .get(reviewController.getMediaReviews);
router
  .route('/user/:userid')
  .get(reviewController.getUserReviews);

module.exports = router;
