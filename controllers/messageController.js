const mongoose = require('mongoose');

exports.homePage = (req, res) => {
  res.render('index');
}
