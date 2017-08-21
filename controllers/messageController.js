const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.homePage = (req, res) => {
  res.render('index');
}

exports.getMessages = (req, res) => {
  res.render('messages');
}

exports.newMessage = (req, res) => {
  res.render('newMessage');
}

exports.createMessage = async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.redirect('/messages');
};
