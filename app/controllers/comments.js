var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Comment = mongoose.model('Comment');

module.exports = function (app) {
    app.use('/api/comments', router);
};
/** MIDDLEWAREs
 *
 *
 */



function findComment(req, res, next) {

    var query = Comment
        .findById(req.params.id);


    query.exec(function (err, comment) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!comment) {
            res.status(404).send('Comment not found');
            return;
        }


        // Store the issue in the request.
        req.comment = comment;

        next();
    });
}

/**
 * ROUTES
 */
/**
 * @api {get} /comments Read all comments
 * @apiVersion 0.0.0
 * @apiName GetComments
 * @apiGroup Comments
 * @apiPermission admin
 *
 * @apiDescription This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.
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
 * @apiVersion 0.0.0
 * @apiName PostComment
 * @apiGroup Comments
 * @apiPermission user
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
 *
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


/**
 * get a comment
 */
router.get('/:id', findComment, function (req, res, next) {
    res.send(req.comment);
});

/**
 * returns comments_user for an issue
 */
//TODO: move to issues and do the same for users
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
 * modify a comment
 * OKAY TESTED
 * */

 router.put('/:id', findComment, function(req, res) {

  // Update the description.
  req.description = req.body.description;


  // Save the comment.
  req.comment.save(function(err, updatedComment) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(updatedComment);
  });
});


