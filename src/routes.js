//const { Router } = require('express');
import { Router } from 'express';
//import MyFirstController from './app/controller/MyFirstController';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// routes.get('/', (req, res) => {
//     res.json({ message: "Hello world!"})
// })

// routes.post('/', MyFirstController.store);
// routes.get('/', MyFirstController.index);

//module.exports = routes;

routes.post('/user', UserController.store);
routes.post('/session', SessionController.store);

//routes.get('/', UserController.index);

//invocando middlewares
routes.use(authMiddleware);
routes.get('/qualquercoisa', authMiddleware, UserController.index);
routes.put('/user', UserController.update);

export default routes;