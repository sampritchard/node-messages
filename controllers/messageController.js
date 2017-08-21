const mongoose = require('mongoose');
const Message = mongoose.model('Message');

exports.homePage = (req, res) => {
  res.render('index');
}

exports.newMessage = (req, res) => {
  res.render('newMessage');
}

exports.createMessage = async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.redirect('/messages');
};

exports.getMessages = async (req, res) => {
  const messages = await Message.find();
  res.render('messages', { messages });
}

exports.showMessage = async (req, res) => {
  const message = await Message.findOne({ _id: req.params.id })
  res.render('showMessage', { message });
}
