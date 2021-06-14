const express = require('express');
const router = express.Router();

//definindo as rotas do usuarioController
// o nome da constante pode ser qualquer um
const usuarioController = require('../controllers/usuarioController.js');
//chamando a função insert da pag usuarioController através do método post
router.post('/inserirUsuario', usuarioController.Insert);
//rota para buscar todos usuarios
router.get('/usuarios', usuarioController.SearchAll);
//rota para buscar usuario especifico
router.get('/usuarios/:id', usuarioController.SearchOne);
//rota para deletar usuario
router.put('/deletarUsuario/:id', usuarioController.Delete);
//rota para modificar usuario
router.put('/editarUsuario/:id', usuarioController.Update);

//definindo as rotas do clienteController
const clienteController = require('../controllers/clienteController.js');
//chamando a função insert da pag clienteController através do método post
router.post('/inserirCliente', clienteController.Insert);
//rota para buscar todos clientes
router.get('/clientes', clienteController.SearchAll);
//rota para buscar cliente especifico
router.get('/clientes/:id', clienteController.SearchOne)
//rota para deletar cliente
router.put('/deletarCliente/:id', clienteController.Delete);
//rota para modificar cliente
router.put('/editarCliente/:id', clienteController.Update);

module.exports = router;


