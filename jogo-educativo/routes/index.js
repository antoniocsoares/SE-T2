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
router.get('/jardim-celeste', function(req, res) {
    res.render('jardim-celeste.html');
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

router.get('/perguntas/:hash', function (req, res) {
    console.log("VOU CHAMAR A HASH! ",req.params.hash);
    dbFunctions.GetPerguntaByHash(req.params.hash)
        .then(function(perguntas){
            console.log("perguntas is: ", perguntas);
            res.send(perguntas);
        })
        .catch(function(err){
            console.log("ERROR: ",err);
        });
});

module.exports = router;
