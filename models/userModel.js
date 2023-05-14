const mongoose = require('mongoose');

const personalMediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Media must have a title'],
    unique: [true, 'Media must have a unique title'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Media must have a type'],
  },
  yearReleased: {
    type: Number,
    required: [true, 'Media must have a release year'],
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    unique: [true, 'Media must have a unique image'],
    required: [true, 'Media must have an image'],
  },
  genres: {
    type: [String],
    required: [true, 'Media must have a genres list'],
    default: undefined,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: [true, 'username must be unique'],
  },
  watched: {
    type: [personalMediaSchema],
    required: [true, 'user must have a watched list'],
    default: undefined,
  },
  toWatch: {
    type: [personalMediaSchema],
    required: [true, 'user must have a toWatch list'],
    default: undefined,
  },
  role: {
    type: String,
    default: 'Default',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
