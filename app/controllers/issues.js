var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),

    Issue = mongoose.model('Issue'),
    findUser = require("../services/findUser");
//ROUTER
module.exports = function (app) {
    app.use('/api/issues', router);
};


/**
 * MIDDLEWARES
 */

/**
 * Middleware that finds the book corresponding to the :id URL parameter
 * and stores it in `req.book`.
 */
function findIssue(req, res, next) {

    var query = Issue
        .findById(req.params.id);

    if (req.query.embed == 'user') {
        query = query.populate('user'); //si dans issue ya une "FK". si on veut récupérer l'objet complet, on peut utiliser ça. Remplace ID par objet
    } //TODO for comments as well

    if (req.query.embed == 'comment') {
        query = query.populate('comments_user.comment'); //si dans issue ya une "FK". si on veut récupérer l'objet complet, on peut utiliser ça. Remplace ID par objet
    } // TODO test

    query.exec(function (err, issue) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!issue) {
            res.status(404).send('Issue not found');
            return;
        }


        // Store the issue in the request.
        req.issue = issue;

        next();
    });
}

function findIssuesByUser(req, res, next) {


    // Find the user.

    //User.findById(re) //TODO callback function like issue.find but with else if

    var criteria = {
     user: req.user._id //autre Middleware avant
     };


    Issue.find(criteria, function (err, issues) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        /*else if (!issue) {
         // Return an error if the user doesn't exist.
         res.status(400).send('No user with ID ' + req.body.userId);
         return;
         }*/

        // Store the user in the request.
        req.issues = issues;

        // Forward the request to the next middleware.
        next();
    });
}
/**
 * ROUTES
 */

/**
 * @api {post} /issues Create an issue
 * @apiName CreateIssue
 * @apiGroup Issues
 *
 * @apiSuccess {String} type Type of the issue.
 */
router.post('/', function (req, res, next) { //chemin relatif a "api/people"
//res.send("Hello World!");

    var issue = new Issue(req.body);

    issue.save(function (err, createdIssue) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdIssue);
    });

});

/**
 * Get all issues
 */

router.get('/', function (req, res, next) {
    Issue.find(function (err, issues) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(issues);
    });
});


/**
 * delete an issue
 */
router.delete('/:id', findIssue, function (req, res, next) {
    req.issue.remove(function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.sendStatus(204);
    });
});
/**
 * get an issue
 */
router.get('/:id', findIssue, function (req, res, next) {
    res.send(req.issue);
});


/**
 * get all isues for one user
 */

route.get('/:user_id/issues', findUser, findIssuesByUser, function(req, res, next){
    res.send(req.issues);
});