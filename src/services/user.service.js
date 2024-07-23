const { Users } = require('../data-access/Users');
const User = require('../models/user');

class UserService {
    constructor() {
    }

    async createUser({ name, lvl, avatar, avatarBg, coordId }) {
        try {
            const newUser = new User(name, lvl, avatar, avatarBg, coordId);
            await Users.create(newUser);
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async updateUser(userToUpdate, userReference) {
        try {
            await userReference.update(userToUpdate);
        } catch (error) {
            throw new Error(`Error updating user: ${error.message}`);
        }
    }

    async deleteUser(userId) {
        try {
            const user = await Users.findOne(userId);
            if (!user) {
                throw new Error('User not found');
            }
            await user.destroy();
        } catch (error) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
    async findUserById(userId) {
        try {
            const user = await Users.findByPk(userId)
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw new Error(`Error finding user: ${error.message}`);
        }
    }
}

module.exports = new UserService();