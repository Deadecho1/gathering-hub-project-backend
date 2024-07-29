
const { Chats } = require('../data-access/Chats');
const { Chat } = require('../models/Chat');

class ChatService {
    constructor() {
    }

    async createChat(message, username) {
        try {
            const newChat = new Chat(message, username);
            const chat = await Chats.create(newChat);
            return chat;
        } catch (error) {
            throw new Error(`Error creating chat: ${error.message}`);
        }
    }


    async getAllChats() {
        try {
            const chats = await Chats.findAll();

            return chats;
        } catch (error) {
            throw new Error(`Error finding chats: ${error.message}`);
        }
    }

}

module.exports = new ChatService();