
var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),

    Issue = mongoose.model('Issue');
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
        query = query.populate('user');
    } //TODO WTF does this do ???

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

/*
 function findIssuesByUser(req, res, next) {
 if (!req.body.user) {
 // If no user ID is given, return an error.
 res.status(400).send('User ID is required');
 return;
 } else if (!mongoose.Types.ObjectId.isValid(req.body.user)) {
 // If the user ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
 res.status(400).send('No user with ID ' + req.body.user);
 return;
 }

 // Find the user.

 //User.findById(re) //TODO callback function like issue.find but with else if

 /!*var criteria = {
 user: req.query.user;
 };*!/


 Issue.find(criteria, function (err, issue) {
 if (err) {
 res.status(500).send(err);
 return;
 } /!*else if (!issue) {
 // Return an error if the user doesn't exist.
 res.status(400).send('No user with ID ' + req.body.userId);
 return;
 }*!/

 // Store the user in the request.
 req.issueUser = user;

 // Forward the request to the next middleware.
 next();
 });
 }*/
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