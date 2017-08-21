const mongoose = require('mongoose');

exports.homePage = (req, res) => {
  res.render('index');
}

exports.getMessages = (req, res) => {
  res.render('messages');
}
