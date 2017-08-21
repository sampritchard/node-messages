const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.homePage);
router.get('/messages', messageController.getMessages);
router.get('/messages/new', messageController.newMessage);
// router.get('/messages/new', messageController.createMessage);

module.exports = router;
