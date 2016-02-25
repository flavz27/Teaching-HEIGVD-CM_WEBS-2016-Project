/**
 * controller Users
 */


var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function (app) {
    app.use('/api/users', router);
};
/**
 * gets all users
 */
router.get('/', function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(users);
    });
});


/**
 * created a new user
 * TODO
 */
router.post('/', function (req, res, next) { //chemin relatif a "api/people"
    /*res.send("Hello World!");*/

    var user = new User(req.body);

    user.save(function (err, createdUser) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdUser);
    });

});


/*
ID Flavia: 56ced63b3376c594473ab8c2
ID Sabine: 56ced66daa89b1aa47ed6a46
 */