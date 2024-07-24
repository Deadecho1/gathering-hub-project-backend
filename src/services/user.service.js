const { UserFriends } = require('../data-access/UserFriends');
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
            await this.loadFriendsToUser(user);
            return user;
        } catch (error) {
            throw new Error(`Error finding user: ${error.message}`);
        }
    }

    async getAllUsers() {
        try {
            const users = await Users.findAll();
            for (let usersIndex = 0; usersIndex < users.length; usersIndex++) {
                this.loadFriendsToUser(users[usersIndex]);
            }
            return users;
        } catch (error) {
            throw new Error(`Error finding users: ${error.message}`);
        }
    }

    async loadFriendsToUser(userToFill) {
        try {
            const friends = await UserFriends.findAll({
                where: {
                    userId: userToFill.id
                }
            });
            userToFill.dataValues.friends = friends.map(friend => friend.friendId)
        } catch (error) {
            throw new Error(`Error finding friends: ${error.message}`);
        }
    }

}

module.exports = new UserService();