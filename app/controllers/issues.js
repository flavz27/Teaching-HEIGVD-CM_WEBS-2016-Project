var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),

    Issue = mongoose.model('Issue'),
    findUser = require("../services/findUser"),
    _ = require("underscore");
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
 * modify an issue
 */
router.put('/:id', findIssue, function (req, res, next) {



//update partiel
    var updates = _.pick(req.body, 'type', 'coordinates', 'status'); //restreint les trucs à manger
    _.extend(req.issue, updates); //regarde dans req. body les attributs et les remplacer, mais seulement ceux qui sont la



    req.issue.save(function (err, updatedIssue) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(updatedIssue);
    });
});

/**
 * create a comment
 */

router.post('/:id_issue/comments', function (req, res, next) { //chemin relatif a "api/people"
    /*res.send("Hello World!");*/


    id = req.params.id_issue;
    findIssue;

    var comment = new Comment(req.body);

    comment.save(function (err, createdComment) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdComment);
    });

});

//id: 56ced91fab3a5e6648883586