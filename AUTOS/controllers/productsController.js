var autos = require('../modules/autos');

var productsController = {
    lista: function (req, res, next) {
        return res.render('listado', {'autos': autos.lista})
    },
    porMarca: function (req, res, next) {
        return res.render('listado', {'autos': autos.porMarca(req.params.marca)})
    },
    porColor: function (req, res, next) {
        return res.render('listado', {'autos': autos.porColor(req.params.color)})
    },
    porModelo: function (req, res, next) {
        return res.render('listado', {'autos': autos.porModelo(req.params.modelo)})
    },
    porModeloAnio: function (req, res, next) {
        var results = autos.porModeloAnio(req.params.modelo, req.params.anio);
        return res.render('listado', {'autos': results})
    },
    porAnio: function (req, res, next) {
        return res.render('listado', {'autos': autos.porAnio(req.params.anio)})
    },
}

module.exports = productsController;