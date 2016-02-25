/**
 * Created by Sabine on 25.02.2016.
 */

var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),

    Issue = mongoose.model('Issue');
//ROUTER
module.exports = function (app) {
    app.use('/api/issues', router);
};
/**
 * creates a new issue
 *
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


function findIssuesByUser(req, res, next) {
    if (!req.body.userId) {
        // If no user ID is given, return an error.
        res.status(400).send('User ID is required');
        return;
    } else if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
        // If the user ID is not a valid MongoDB ID, no need to execute a query, return an error directly.
        res.status(400).send('No user with ID ' + req.body.userId);
        return;
    }

    // Find the user.
    Publisher.findById(req.body.userId, function (err, user) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!user) {
            // Return an error if the user doesn't exist.
            res.status(400).send('No user with ID ' + req.body.userId);
            return;
        }

        // Store the user in the request.
        req.issueUser = user;

        // Forward the request to the next middleware.
        next();
    });
}