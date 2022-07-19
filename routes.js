const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const propostaController = require('./src/controllers/propostaController');
const tabelaController = require('./src/controllers/tabelaController');
const templateController = require('./src/controllers/templateController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de tabela
route.get('/tabela/index/:id', loginRequired, tabelaController.index);
route.post('/tabela/edit/:id', loginRequired, tabelaController.edit);
route.post('/tabela/register', loginRequired, tabelaController.register);

// Rotas de proposta
route.get('/proposta/index', loginRequired, propostaController.index);
route.post('/proposta/register', loginRequired, propostaController.register);
route.get('/proposta/index/:id', loginRequired, propostaController.editIndex);
route.post('/proposta/edit/:id', loginRequired, propostaController.edit);
route.get('/proposta/delete/:id', loginRequired, propostaController.delete);

// Rotas template
route.get('/template/index', loginRequired, templateController.index);
route.get('/template/pdf/:id', loginRequired, templateController.pdf);

module.exports = route;
