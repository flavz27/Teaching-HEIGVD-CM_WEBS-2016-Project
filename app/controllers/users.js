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
 * MIDDLEWARES
 */

function findUser(req, res, next) {

    var query = User
        .findById(req.params.id);

   /* if (req.query.embed == 'user') {
        query = query.populate('user');
    } //TODO WTF does this do ???*/

    query.exec(function (err, user) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!user) {
            res.status(404).send('user not found');
            return;
        }

        // Store the issue in the request.
        req.user = user;

        next();
    });
}
/**
 * ROUTES
 */
/**
 * creates a new user
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
/**
 * Get all citizens
 */

router.get('/citizens', function (req, res, next) {
    /*res.send("Hello World!");*/

     User.find({'citizen' : "true"}, function (err, users) {
     if (err) {
     res.status(500).send(err);
     return;
     }

     res.send(users);
     });
});

/**
 * Get all staffs
 */

router.get('/staffs', function (req, res, next) {
    /*res.send("Hello World!");*/

    User.find({'staff' : "true"}, function (err, users) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(users);
    });
});
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
 * gets a specific user based on id
 **/
router.get('/:id', findUser, function (req, res, next) {
    res.send(req.user);
});

/**
 * deletes a user
 */
router.delete('/:id', findUser, function (req, res, next) {
    req.user.remove(function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.sendStatus(204);
    });
});




