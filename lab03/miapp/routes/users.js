var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/compra', function(req, res, next) {
  res.send('esta en compra');
});

router.get('/otro', function(req, res, next) {
  res.send('ESTAOS EN qwp');
});

module.exports = router;
