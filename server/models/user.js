const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  premium: {
    type: Boolean,
    default: false,
  },
  followingArtists: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
