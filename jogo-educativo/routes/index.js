var express = require('express');
var router = express.Router();
var dbFunctions = require('../scripts/dbConnector');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});
router.get('/jogos', function(req, res) {
  res.render('jogos.html');
});
router.get('/crachas', function(req, res) {
  res.render('crachas.html');
});
router.get('/utilizador/:name', function (req, res) {
    console.log("VOU CHAMAR O NOME! ",req.params.name);
    //res.contentType('json');
    dbFunctions.GetUserByName(req.params.name)
        .then(function(user)
        {
            console.log("user is: ",user);
            res.send(user);
        })
        .catch(function(err)
        {
            console.log("ERROR: ",err);
        });
});

router.get('/utilizadores', function (req, res) {
    dbFunctions.GetTopThreePoints()
        .then(function(users)
        {
            console.log("user is: ",users);
            res.send(users);
        })
        .catch(function(err)
        {
            console.log("ERROR: ",err);
        });
});

router.get('/pergunta/:hash', function (req, res) {
    console.log("VOU CHAMAR A HASH! ",req.params.hash);
    res.contentType('json');
    res.send(dbFunctions.GetPerguntaByHash(req.params.hash));
});

router.get('/jogos/jardim-celeste', function(req, res) {
    res.render('jogos/jardim_celeste.html');
});

module.exports = router;
