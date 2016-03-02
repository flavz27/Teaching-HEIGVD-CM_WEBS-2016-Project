/**
 * controller Users
 */


var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Issue = mongoose.model('Issue'),
    findUser = require("../services/findUser"),
    findIssuesByUser = require("../services/findIssuesByUser");


module.exports = function (app) {
    app.use('/api/users', router);
};

/**
 * MIDDLEWARES
 */

/*function findUser(req, res, next) {

 var query = User
 .findById(req.params.id);

 /!* if (req.query.embed == 'user') {
 query = query.populate('user');
 } //TODO WTF does this do ???*!/

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
 }*/



/**
 * ROUTES
 */



/**
 * @api {post} /users Create an user
 * @apiVersion 0.0.0
 * @apiName PostUser
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiDescription This route can create a news user with status staff or not.
 *
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       1 if the user is a citizen 0 if not.
 * @apiSuccess {Boolean}  staff         1 if the user is a staff 0 if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *
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


/**
 * @api {get} /users/citizens Get every user how are a citizen.
 * @apiVersion 0.0.0
 * @apiName GetCitizen
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiDescription This route can get every user how are the field citizen with 1.
 *
 *
 * @apiParam {Number} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       1 if the user is a citizen 0 if not.
 * @apiSuccess {Boolean}  staff         1 if the user is a staff 0 if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *
 */


router.get('/citizens', function (req, res, next) {
    /*res.send("Hello World!");*/
    var criteria = {
        citizen: true

    }

    User.find(criteria, function (err, users) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(users);
    });
});


/**
 * @api {get} /users/staffs Get all staff.
 * @apiVersion 0.0.0
 * @apiName GetStaff
 * @apiGroup Users
 * @apiPermission admin
 *
 * @apiDescription This route can get every user how are the field staff with 1.
 *
 *
 * @apiParam {Number} id The Users-ID.
 *
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       1 if the user is a citizen 0 if not.
 * @apiSuccess {Boolean}  staff         1 if the user is a staff 0 if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 *
 */

router.get('/staffs', function (req, res, next) {
    /*res.send("Hello World!");*/

    User.find({'staff': "true"}, function (err, users) {
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


/**
 * get all issues for one user
 */

router.get('/:id/issues', findUser, findIssuesByUser, function (req, res, next) {
    res.send(req.issues);
});