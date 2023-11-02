import {Router, Request, Response } from 'express';
import * as HomeController from '../controllers/homeController';
import * as InfoControllerController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/sobre', InfoControllerController.sobre);

router.get('/contato', InfoControllerController.contato);

router.get('/nome', UserController.nome);

//CRIANDO MÉTODO GET
router.get('/idade', UserController.idade);

//CRIANDO MÉTODO POST
router.post('/idade-post', UserController.idadeFormPost);

export default router;


