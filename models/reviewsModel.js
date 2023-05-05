const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  mediaId: {
    type: String,
    required: [true, 'media id is required'],
  },
  userId: {
    type: String,
    required: [true, 'user id is required'],
  },
  review: {
    type: String,
    required: [true, 'review is required'],
    maxLength: 200,
  },
  rating: {
    type: Number,
    default: -1,
  },
});

reviewSchema.index(
  { mediaId: 1, userId: 1 },
  { unique: true }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
