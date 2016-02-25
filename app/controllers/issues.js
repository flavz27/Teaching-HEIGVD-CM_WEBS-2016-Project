/**
 * Created by Sabine on 25.02.2016.
 */

var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),

    Issue = mongoose.model('Issue');

module.exports = function (app) {
    app.use('/api/issues', router);
};

router.post('/', function (req, res, next) { //chemin relatif a "api/people"
//res.send("Hello World!");

    var issue = new Issue(req.body);

    issue.save(function(err, createdIssue) {
        if(err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdIssue);
    });


});


router.get('/', function (req, res, next) {
    Issue.find(function (err, issues){
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(issues);
    });
});