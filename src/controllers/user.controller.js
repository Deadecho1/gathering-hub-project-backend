const UserService = require('../services/user.service');

class UserController {
    constructor() {
    }

    async updateUser(req, res) {
        try {
            const { userId } = req.params;
            const userReference = await UserService.findUserById(userId);

            if (!userReference) {
                return res.status(404).json({ error: 'User not found' });
            }
            const { name, lvl, avatar, avatarBg, coordId, about } = req.body;
            const userToUpdate = { name, lvl, avatar, avatarBg, coordId, about };
            const user = await UserService.updateUser(userToUpdate, userReference);
            return res.status(200).json(user);
        }

        catch (error) {
            return res.status(500).json({ error: `Error updating user: ${error.message}` });
        }
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
            return res.status(500).json({ error: `Error finding users: ${error.message}` });
        }
    }
    async addFriend(req, res) {
        try {
            const { userId, friendId } = req.body;
            const userFriend = await UserService.addFriend(userId, friendId);

            return res.status(200).json(userFriend);
        } catch (error) {
            return res.status(500).json({ error: `Error adding friend: ${error.message}` });
        }
    }
}
module.exports = new UserController();
