var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'VENTAS RAPIDAS!!s' });
});
router.get('/listado', function(req, res) {
  res.render('lista', { title: 'Express' });
});
router.post('/solicitud', function(req, res) {
  res.render('soli', { title: 'Express' });
});



module.exports = router;
