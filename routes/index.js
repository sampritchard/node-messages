const messageController = require('../controllers/messageController');
const express = require('express');
const router = express.Router();

router.get('/', messageController.homePage);
router.get('/messages', messageController.getMessages);
router.get('/messages/new', messageController.newMessage);
router.post('/messages/new', messageController.createMessage);
router.get('/messages/:id', messageController.showMessage);

module.exports = router;
