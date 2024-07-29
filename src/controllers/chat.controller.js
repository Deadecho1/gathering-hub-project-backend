const chatService = require("../services/chat.service");

class ChatController {
    constructor() {
    }

    async createChat(req, res) {
        try {
            const { message, username } = req.body;
            const newChat = await chatService.createChat(message, username);
            return res.status(201).json(newChat);
        }
        catch (error) {
            return res.status(500).json({ error: `Error creating chat: ${error.chat}` });
        }
    }



    async getAllChats(req, res) {
        try {
            const chats = await chatService.getAllChats();

            return res.status(200).json(chats);
        } catch (error) {
            return res.status(500).json({ error: `Error finding chats: ${error.chat}` });
        }
    }
}
module.exports = new ChatController();
