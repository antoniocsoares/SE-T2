/**
 * Created by Diogo on 07/06/2016.
 */

'use strict';

var mongoose = require('mongoose');

var MONGO_URL = 'mongodb://localhost/jogo-educativo';

var db = mongoose.createConnection(MONGO_URL);

db.on('error', console.error.bind(console, 'console error: '));

var userSchema = mongoose.Schema({
    hash: {type: String, unique: true, required: true, dropDups: true, default:'default'},
    jardim: {}
});

var Question = db.model('perguntas', userSchema);

module.exports = Question;