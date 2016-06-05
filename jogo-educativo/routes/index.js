var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});
router.get('/jogos', function(req, res) {
  res.render('jogos.html');
});
router.get('/crachas', function(req, res) {
  //res.render('crachas.html');
});
router.get('/jogos/jardim-celeste', function(req, res) {
    res.render('jogos/jardim_celeste.html');
});

module.exports = router;
