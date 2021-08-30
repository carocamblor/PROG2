var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');

router.get('/', productsController.lista);

router.get('/marca/:marca', productsController.porMarca);

router.get('/color/:color', productsController.porColor);

router.get('/anio/:anio', productsController.porAnio);

router.get('/modelo/:modelo/anio/:anio', productsController.porModeloAnio);

// router.get('/modelo/:modelo')

module.exports = router;