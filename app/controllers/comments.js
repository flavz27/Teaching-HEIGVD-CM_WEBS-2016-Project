var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Comment = mongoose.model('Comment');

module.exports = function (app) {
    app.use('/api/comments', router);
};
/**
 * gets all comments
 */
router.get('/', function (req, res, next) {
    Comment.find(function (err, comments) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(comments);
    });
});
/**
 creates a new comment
 **/

router.post('/', function (req, res, next) { //chemin relatif a "api/people"
    /*res.send("Hello World!");*/

    var comment = new Comment(req.body);

    comment.save(function (err, createdComment) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdComment);
    });

});
