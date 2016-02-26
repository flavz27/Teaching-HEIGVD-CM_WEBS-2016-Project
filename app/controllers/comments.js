var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Comment = mongoose.model('Comment');

module.exports = function (app) {
    app.use('/api/comments', router);
};

/**
 * @api {get} /comments Read all comments
 * @apiVersion 0.0.0
 * @apiName GetComments
 * @apiGroup Comments
 * @apiPermission admin
 *
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
 * @apiSuccess {Number}   id            The Comments-ID.
 * @apiSuccess {Number}   date_created  Creation Date.
 * @apiSuccess {String}   description   Description of the Comment.
 * @apiSuccess {Number}   user          User-ID how are edit the comment.


 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */






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
 * @api {post} /comments Create a comment
 * @apiName CreateComment
 * @apiGroup Comments
 *
 * @apiSuccess {String} description Description of the comment.
 */

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
