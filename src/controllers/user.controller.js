const User = require('../models/User');
const UserService = require('../services/user.service');

class UserController {
    constructor() {
    }

    async createUser(req, res) {
        const { name, lvl, avatar, avatarBg, coordId } = req.body;
        await UserService.createUser(name, lvl, avatar, avatarBg, coordId);
        return res.status(201).json(newUser);
    }

    async updateUser(req, res) {
        const { userId } = req.params;
        const userReference = await UserService.findUserById(userId);

        if (!userReference) {
            return res.status(404).json({ error: 'User not found' });
        }
        const { name, lvl, avatar, avatarBg, coordId } = req.body;
        const userToUpdate = { name, lvl, avatar, avatarBg, coordId };
        await UserService.updateUser(userToUpdate, userReference);

        return res.status(200).json(userToUpdate);
    }

    async deleteUser(req, res) {
        const { userId } = req.params;

        return res.status(204).send();
    }
    async findUserById(req, res) {
        try {
            const { userId } = req.params;
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: 'Invalid or missing userId parameter' });
            }

            const user = await UserService.findUserById(userId);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: `Error finding user: ${error.message}` });
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();

            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({ error: `Error finding coordinate: ${error.message}` });
        }
    }
}
module.exports = new UserController();
