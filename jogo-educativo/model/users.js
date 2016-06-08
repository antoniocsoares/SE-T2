/**
 * Created by Diogo on 07/06/2016.
 */

'use strict';

var mongoose = require('mongoose');

var MONGO_URL = 'mongodb://localhost/jogo-educativo';

var db = mongoose.createConnection(MONGO_URL);

db.on('error', console.error.bind(console, 'console error: '));

var userSchema = mongoose.Schema({
    name: {type: String, required: true, dropDups: true},
    badges: {
        jardineiro: Boolean,
        chocolateiro: Boolean,
        atleta: Boolean,
        explorador: Boolean
    },
    points: {type: Number, required: true, min:0}
});

var User = db.model('utilizadores', userSchema);

module.exports = User;