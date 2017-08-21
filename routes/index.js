const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.homePage);
router.get('/messages', messageController.getMessages);

module.exports = router;
