const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    trim: true,
    required: 'Please enter a message'
  }
});

module.exports = mongoose.model('Message', messageSchema);
