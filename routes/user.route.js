const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.get('/all-users', UserController.getAllUsers);

userRouter.put('/:userId', UserController.updateUser);

userRouter.get('/:userId', UserController.findUserById);

userRouter.post('/add', UserController.addFriend);


module.exports = userRouter;