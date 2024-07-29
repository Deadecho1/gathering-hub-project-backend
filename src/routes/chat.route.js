const { Router } = require('express');
const ChatController = require('../controllers/chat.controller');

const chatRouter = Router();

chatRouter.post('/', ChatController.createChat);

chatRouter.get('/all-chats', ChatController.getAllChats);



module.exports = chatRouter;