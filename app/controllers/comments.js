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
 * @api {post} /comments/:action_id/:id Assign comment to an action
 * @apiVersion 0.0.0
 * @apiName PostCommentsAction
 * @apiGroup Comments
 *
 * @apiDescription This route can assign comment to an action with specific id.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments/1122233621/515265515522
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
 * @apiSuccess {Number}                     id            The Comments-ID.
 * @apiSuccess {Number}                     date_created  Creation Date.
 * @apiSuccess {String}                     description   Description of the Comment.
 * @apiSuccess {Schema.Types.ObjectId}      user          User-ID how are edit the comment.
 *
 *
 *
 * @apiError UnexpectedToken The user has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError NotFound The id comment is not found
 *
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
 *@apiErrorExample Response (Unexpected Token):
 * Comment not found
 */


router.post('/:action_id/:id', findComment, function(req, res) {
    res.sent({"message":"sorry, this method doesn't work yet !"});
/*    //find action
    req.action.user = req.comment._id;


    // Save the issue.
    req.comment.save(function(err, updatedComment) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.send(updatedComment);
    });*/
    //TODO: not working
});

/**
 * @api {get} /comments Read all comments
 * @apiVersion 0.0.0
 * @apiName GetComments
 * @apiGroup Comments
 *
 * @apiDescription This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
 * @apiSuccess {Number}                     id            The Comments-ID.
 * @apiSuccess {Number}                     date_created  Creation Date.
 * @apiSuccess {String}                     description   Description of the Comment.
 * @apiSuccess {Schema.Types.ObjectId}      user          User-ID how are edit the comment.
 *
 *
 *
 * @apiError NotFound There are not comments
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 []
 *
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
 * @apiName PostComments
 * @apiGroup Comments
 *
 * @apiDescription This route can gets all comments are editing in the application. This route isn't used but we have make it because thi is the base command.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
 * @apiSuccess {Number}                     id            The Comments-ID.
 * @apiSuccess {Number}                     date_created  Creation Date.
 * @apiSuccess {String}                     description   Description of the Comment.
 * @apiSuccess {Schema.Types.ObjectId}      user          User-ID how are edit the comment.
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
 {
   "message": "Comment validation failed",
   "name": "ValidationError",
   "errors": {
     "user": {
       "properties": {
         "type": "required",
         "message": "Path `{PATH}` is required.",
         "path": "user"
       },
       "message": "Path `user` is required.",
       "name": "ValidatorError",
       "kind": "required",
       "path": "user"
     },
     "description": {
       "properties": {
         "type": "required",
         "message": "Path `{PATH}` is required.",
         "path": "description"
       },
       "message": "Path `description` is required.",
       "name": "ValidatorError",
       "kind": "required",
       "path": "description"
     },
     "date_created": {
       "properties": {
         "type": "required",
         "message": "Path `{PATH}` is required.",
         "path": "date_created"
       },
       "message": "Path `date_created` is required.",
       "name": "ValidatorError",
       "kind": "required",
       "path": "date_created"
     }
   }
 }
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
 * @api {get} /comments/:id  Get a comment
 * @apiVersion 0.0.0
 * @apiName GetComment
 * @apiGroup Comments
 *
 * @apiDescription This route can gets a specific comment with id.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments/56dbf15c1ed727f82d272ce2
 *
 * @apiParam {Number}                     id            The Comments-ID.
 *
 *
 * @apiSuccess {Number}                     id            The Comments-ID.
 * @apiSuccess {Number}                     date_created  Creation Date.
 * @apiSuccess {String}                     description   Description of the Comment.
 * @apiSuccess {Schema.Types.ObjectId}      user          User-ID how are edit the comment.
 *
 *
 *
 * @apiError NotFound There are not comments
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Not Found):
 *
 []
 *
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
 * @api {put} /comments/:id  Modify a comment
 * @apiVersion 0.0.0
 * @apiName PutComment
 * @apiGroup Comments
 *
 * @apiDescription This route can modify a specific comment with id.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments/56dbf15c1ed727f82d272ce2
 *
 * @apiParam {Number}                     id            The Comments-ID.
 *
 *
 *
 * @apiError NotFound There are not comment with this id
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




// TODO: not working anymore... WHYY????? idk
 router.put('/:id', findComment, function(req, res) {

  // Update the description.
  req.description = req.body.description;

     req.comment.markModified('description');

  // Save the comment.
  req.comment.save(function(err, updatedComment) {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.send(updatedComment);
  });
});




/**
 * @api {delete} /comments/id  Delete a comment
 * @apiVersion 0.0.0
 * @apiName DeleteComment
 * @apiGroup Comments
 *
 * @apiDescription This route can delete a specific comment with id.
 *
 * @apiExample Example usage:
 * http://localhost/api/comments/56dbf15c1ed727f82d272ce2
 *
 * @apiParam {Number}                     id            The Comments-ID.
 *
 *
 *
 * @apiError NotFound There are not comment with this id
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


router.delete('/:id', findComment, function (req, res, next) {
    req.comment.remove(function (err) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.sendStatus(204).send("deleted"); //TODO: Test if "deleted" shows
    });
});