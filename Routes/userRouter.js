
const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController');



userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getUsers)
userRouter.get('/user/:id', userController.getOneUser)
userRouter.put('/user', userController.updateUser)
userRouter.delete('/user/:id', userController.deleteUser)

module.exports = (userRouter)