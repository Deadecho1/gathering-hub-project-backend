const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/', UserController.createUser);

userRouter.put('/:userId', UserController.updateUser);

userRouter.delete('/:userId', UserController.deleteUser);

userRouter.get('/:userId', UserController.findUserById);

module.exports = userRouter;