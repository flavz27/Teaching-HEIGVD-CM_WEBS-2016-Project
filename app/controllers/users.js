/**
 * controller Users
 */


var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Issue = mongoose.model('Issue'),
    findUser = require("../services/findUser"),
    findIssuesByUser = require("../services/findIssuesByUser"),
    _ = require("underscore");


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
 *
 * @apiDescription This route can create a news user with status staff or not and citizen or not. "citizen": boolean but if something else is entered, the api will store it as true, same for "staff"
 *
 * @apiExample Example usage:
 * http://localhost/api/users
 *
 * @apiParam {String}       username       The username of the user.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError UnexpectedToken The user has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
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
 * @api {get} /users/citizens Get all citizens
 * @apiVersion 0.0.0
 * @apiName GetUsersCitizen
 * @apiGroup Users
 *
 * @apiDescription This route can get all user how are citizen (with boolean citizen true).
 *
 * @apiExample Example usage:
 * http://localhost/api/users/citizens
 *
 * @apiParam {String}       username       The username of the user.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError NotFound There are not users with this parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 []
 *
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
 * @api {get} /users/staffs Get all staffs
 * @apiVersion 0.0.0
 * @apiName GetUserStaff
 * @apiGroup Users
 *
 * @apiDescription This route can get all user how are staff (with boolean staff true).
 *
 * @apiExample Example usage:
 * http://localhost/api/users/staffs
 *
 * @apiParam {String}       username       The username of the user.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError NotFound There are not users with this parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *  []
 *
 *
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
 * @api {get} /users Get all users
 * @apiVersion 0.0.0
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiDescription This route can get all users.
 *
 * @apiExample Example usage:
 * http://localhost/api/users
 *
 * @apiParam {String}       username       The username of the user.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError NotFound There are not users
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 []
 *
 *
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
 * @api {get} /users/:id Get one user
 * @apiVersion 0.0.0
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiDescription This route can gets a specific user with id.
 *
 * @apiExample Example usage:
 * http://localhost/api/users/56ced66daa89b1aa47ed6a46
 *
 * @apiParam {Number}   id            The Users-ID.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError NotFound There are not user with this id
 * @apiError NotValid The request is not valid
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 user not found
 *
 * @apiErrorExample Response (Not Valid):
 *
 {
   "message": "Cast to ObjectId failed for value \"null=56dae5ce12916cf4357035c6\" at path \"_id\"",
   "name": "CastError",
   "kind": "ObjectId",
   "value": "null=56dae5ce12916cf4357035c6",
   "path": "_id"
 }
 *
 *
 */


router.get('/:id', findUser, function (req, res, next) {
    res.send(req.user);
});


/**
 * @api {delete} /users/:id Delete one user
 * @apiVersion 0.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiDescription This route can delete a specific user based on id.
 *
 * @apiExample Example usage:
 * http://localhost/api/users/56ced66daa89b1aa47ed6a46
 *
 * @apiParam {Number}   id            The Users-ID.
 *
 *
 * @apiError NotFound There are not user with this id
 * @apiError NotValid The request is not valid
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 user not found
 *
 * @apiErrorExample Response (Not Valid):
 *
 {
   "message": "Cast to ObjectId failed for value \"null=56dae5ce12916cf4357035c6\" at path \"_id\"",
   "name": "CastError",
   "kind": "ObjectId",
   "value": "null=56dae5ce12916cf4357035c6",
   "path": "_id"
 }
 *
 *
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
 * @api {get} /users/:id/issues Get all issues
 * @apiVersion 0.0.0
 * @apiName GetUserIssues
 * @apiGroup Users
 *
 * @apiDescription This route can gets a specific user based on id with his issues.
 *
 * @apiExample Example usage:
 * http://localhost/api/users/56ced66daa89b1aa47ed6a46/issues
 *
 * @apiParam {Number}   id            The Users-ID.
 *
 *
 *
 * @apiSuccess {Number}                 id                      The Users-ID.
 * @apiSuccess {Number}                 id                      The Issue-ID.
 * @apiSuccess {String}                 description             Description of the issue.
 * @apiSuccess {String}                 type                    Type of the issue (according to a list).
 * @apiSuccess {Schema.Types.ObjectId}  user                    User how are created the issue
 * @apiSuccess {Number}                 date_created            Creation date of issue
 * @apiSuccess {Object}                 coordonate              Coordinated the problem (longitude and latitude)
 * @apiSuccess {String}                 coordonate.lat          Latitude coordinate
 * @apiSuccess {String}                 coordonate.long         Longitude coordinate
 * @apiSuccess {String}                 status                  Status of the issue
 * @apiSuccess {[]}                     comments_user           Board with all comments of the issue
 * @apiSuccess {Schema.Types.ObjectId}  comments_user.comment   A comment of the issue
 * @apiSuccess {[]}                     action                  Board with all actions of the issue
 * @apiSuccess {Number}                 action.date             Creation date of action
 * @apiSuccess {String}                 action.action           Definition of the action
 * @apiSuccess {Schema.Types.ObjectId}  action.comment          A comment of the action
 * @apiSuccess {Boolean}                action.current                 If the action is the current = true
 * @apiSuccess {[]}                     tags                    Board with all tags of the issue
 * @apiSuccess {String}                 tags.name               Name of the tag
 *
 *
 *
 * @apiError NotFound There are not user with this id
 * @apiError NotValid The request is not valid
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 user not found
 *
 * @apiErrorExample Response (Not Valid):
 *
 {
   "message": "Cast to ObjectId failed for value \"null=56dae5ce12916cf4357035c6\" at path \"_id\"",
   "name": "CastError",
   "kind": "ObjectId",
   "value": "null=56dae5ce12916cf4357035c6",
   "path": "_id"
 }
 *
 *
 */


router.get('/:id/issues', findUser, findIssuesByUser, function (req, res, next) {

    res.send(req.issues);
});




/**
 * @api {put} /users/:id Update user
 * @apiVersion 0.0.0
 * @apiName PutUser
 * @apiGroup Users
 *
 * @apiDescription This route can updates a specific user based on id.
 *
 * @apiExample Example usage:
 * http://localhost/api/users/56ced66daa89b1aa47ed6a46
 *
 * @apiParam {Number}   id            The Users-ID.
 *
 *
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Boolean}  citizen       true if the user is a citizen false if not.
 * @apiSuccess {Boolean}  staff         true if the user is a staff false if not.
 * @apiSuccess {String}   username      Pseudo of the user.
 *
 *
 *
 * @apiError NotFound There are not user with this id
 * @apiError NotValid The request is not valid
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 user not found
 *
 * @apiErrorExample Response (Not Valid):
 *
 {
   "message": "Cast to ObjectId failed for value \"null=56dae5ce12916cf4357035c6\" at path \"_id\"",
   "name": "CastError",
   "kind": "ObjectId",
   "value": "null=56dae5ce12916cf4357035c6",
   "path": "_id"
 }
 *
 *
 *
 */


router.put('/:id', findUser, function (req, res, next) {


//update partiel
    var updates = _.pick(req.body, 'citizen', 'staff'); //restreint les trucs à changer
    _.extend(req.user, updates); //regarde dans req. body les attributs et les remplacer, mais seulement ceux qui sont la


    req.user.save(function (err, updatedUser) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(updatedUser);
    });
});