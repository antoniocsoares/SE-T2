/**
 * Created by Diogo on 08/06/2016.
 */

var User = require('../model/users');
var Question = require('../model/questions');

module.exports = {
    GetUserByName: function(name)
    {
        return new Promise(function(resolve, reject)
        {
            User.findOne({name:name.toUpperCase()})
                .then(function(user)
                {
                    console.log("USER FOUND! ",user);
                    resolve(user);
                })
                .catch(function(err)
                {
                    console.log("ERROR: ", err);
                    reject(err);
                });
        });
    },
    CreateUser: function(user)
    {
        return new Promise(function(resolve, reject)
        {
            User.create({
                name: user.name.toUpperCase(),
                badges: {
                    jardineiro: user.badges.jardineiro,
                    explorador: user.badges.explorador,
                    atleta: user.badges.atleta,
                    chocolateiro: user.badges.chocolateiro
                },
                points: user.points
            }, function(err, user)
            {
                if(err)
                {
                    console.log('ERROR: ',err);
                    reject(err);
                }
                else
                {
                    console.log('Creating new user: ',user);
                    resolve(user);
                }
            });
        });
    },
    GetPerguntaByHash: function(hash)
    {
        return new Promise(function(resolve, reject)
        {
            if(hash)
            {
                Question.findOne({hash:hash.toLowerCase()})
                    .then(function(question)
                    {
                        console.log("question FOUND! ",question);
                        resolve(question);
                    })
                    .catch(function(err)
                    {
                        console.log("ERROR: ", err);
                        reject(err);
                    });
            }
            else
            {
                Question.findOne({hash:'default'})
                    .then(function(question)
                    {
                        console.log("question FOUND! ",question);
                        resolve(question);
                    })
                    .catch(function(err)
                    {
                        console.log("ERROR: ", err);
                        reject(err);
                    });
            }
        });
    },
    GetTopThreePoints: function()
    {
        return new Promise(function(resolve, reject)
        {
            User.find().sort({points:-1}).limit(3)
                .then(function(users)
                {
                    console.log("users FOUND! ",users);
                    resolve(users);
                })
                .catch(function(err)
                {
                    console.log("ERROR: ", err);
                    reject(err);
                });
        });
    }
};


