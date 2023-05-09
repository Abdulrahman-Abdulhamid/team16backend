const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: [true, 'username must be unique'],
  },
  watched: {
    type: [String],
    required: [true, 'user must have a watched list'],
    default: undefined,
  },
  toWatch: {
    type: [String],
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
