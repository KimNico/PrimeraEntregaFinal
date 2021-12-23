const express = require('express');
const path = require('path');
const MyJson = require('../resource/carrito.json');
const carritoController = require('../controllers/carritoController');

const router = express.Router();

router.post('/', carritoController.createCarrito);

router.get('/id', carritoController.deleteCarrito);

router.get('/:id/productos', carritoController.postProductos);

router.post('/:id/productos/:id_prod', carritoController.deleteProducto);


module.exports = router;