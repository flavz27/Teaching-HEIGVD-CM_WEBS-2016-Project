var express = require('express'),
    router = express.Router(), //express router
    mongoose = require('mongoose'),
    async = require('async'),

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
 * Middleware that finds the issue corresponding to the :id URL parameter
 * and stores it in `req.issue`.
 */
function findIssue(req, res, next) {

    var query = Issue
        .findById(req.params.id);
    /*      .skip(offset)
     .limit(limit);*/

    if (req.query.embed == 'user') {
        query = query.populate('user'); //TODO: not working
    }

    if (req.query.embed2 == 'comment') {
        query = query.populate('comments_user.comment'); //Not working either... Idk why...
    }
    //TODO populate actions with their comments
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
function findMatchingIssues(callback) {

    var query = Issue
        .find(criteria)
        // Do not forget to sort, as pagination makes more sense with sorting.
      /!*  .sort('date')*!/ TODO
        .skip(offset)
        .limit(limit);

    // Embed publisher object if specified in the query.
/!*    if (req.query.embed == 'publisher') {
        query = query.populate('publisher');
    }*!/

    // Execute the query.
    query.exec(function(err, issues) {
        if (err) {
            callback(err);
        } else {
            callback(undefined, issues);
        }
    });
}*/




/**
 * ROUTES
 */

/**
 * get all issues with specific status
 */
router.get('/status', function (req, res, next) {

    var request = req.query.data;
    var criteria = {};

    //check if the "data" is one of the statuses authorized
    if(request == "created" | request == "inprogress" | request == "acknowledged"
        | request == "assigned" | request == "solved" | request == "rejected"){
        if(request == "inprogress") {
            request = "in progress"
        }
       criteria.status = request;
        Issue.find(criteria, function(err, issues){
            if (err) {
                res.status(500).send(err);
                return;
            }
          //  query = query.populate('comments_user.comment');

            var query = Issue


            if (req.query.embed == 'comment') {
                query = query.populate('comments_user.comment');
            }
            if (req.query.embed == 'user') {
                query = query.populate('user');
            }
            res.send(issues);
        });
    } else {
        res.status(500);
        return;
    } //TODO: error not working



});

/**
 * add an action to issue /TODO why does it create an id ? not too important but I don't understand why it does that...
 */
router.post('/:id/actions', findIssue, function (req, res, next) {


        // Add the action to the issue's addresses array.
     req.issue.action.push(req.body);
   /* req.issue.action[req.issue.action.length - 1].current = 0;*/

     // Save the issue.
     req.issue.save(function(err, updatedIssue) {
        //changes last action to not current and new to current
         updatedIssue.action[updatedIssue.action.length - 1].current = 1;
         updatedIssue.action[updatedIssue.action.length-2].current = 0;

     if (err) {
     res.status(500).send(err);
     return;
     }



     res.send({"new action": updatedIssue.action[updatedIssue.action.length - 1], "old action" : updatedIssue.action[updatedIssue.action.length-2]});
     });



});

/**
 * add a tag to issue //TODO why does it create an id ? not too important but I don't understand why it does that...
 */
router.post('/:id/tags', findIssue, function (req, res, next) {


    // Add the action to the issue's addresses array.
    req.issue.tags.push(req.body);
    /* req.issue.action[req.issue.action.length - 1].current = 0;*/

    // Save the issue.
    req.issue.save(function(err, updatedIssue) {
        //changes last action to not current and new to current


        if (err) {
            res.status(500).send(err);
            return;
        }



        res.send({"new tag": updatedIssue.tags[updatedIssue.tags.length - 1]});
    });



});

/**
 * create comment for an issue
 */
router.post('/:id/comments', findIssue, function (req, res, next) { //chemin relatif a "api/people"
    /*res.send("Hello World!");*/

    var comment = new Comment(req.body);
    comment.user = req.issue._id;

    comment.save(function (err, createdComment) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send({"created comment" : createdComment, "issue": req.issue});
    });

});

/**
 * @api {post} /issues Create an issue
 * @apiVersion 0.0.0
 * @apiName CreateIssue
 * @apiGroup Issues
 *
 * @apiDescription It creates an issue
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/
 *
 * @apiParam {String} description The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
 */





router.post('/', function (req, res, next) { //chemin relatif a "api/people"
//res.send("Hello World!");

    var issue = new Issue(req.body);
 /*   if(req.body.action[].current = null) {
        issue.action[].current = 1;
    }
*/
    issue.save(function (err, createdIssue) {
        if (err) {
            res.status(500).send(err); // pas propre car donne infos au client
            return; //arrête la fonction. ATTENTION - LE METTRE car sinon CRASH du serveur
        }
        res.send(createdIssue);
    });

});



/**
 * @api {get} /issues Get all issues
 * @apiVersion 0.0.0
 * @apiName GetAllIssues
 * @apiGroup Issues
 *
 * @apiDescription  it's function can recover all the issues
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/
 *
 * @apiParam {String}                   description             The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
 */

/**
 * Get all issues

 * specify what statuses are authorized
 */

router.get('/', function (req, res, next) {

    var criteria = {};

    /*criteria.action[req.issue.action.length - 1] = 1;*/

    // Get page and page size for pagination.
    var page = req.query.page ? parseInt(req.query.page, 10) : 1,
        pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 10;

    // Convert page and page size to offset and limit.
    var offset = (page - 1) * pageSize,
        limit = pageSize;

    // Count all issues (without filters).
    function countAllIssues(callback) {
        Issue.count(function(err, totalCount) {
            if (err) {
                callback(err);
            } else {
                callback(undefined, totalCount);
            }
        });
    }

    // Count issues matching the filters.
    function countFilteredIssues(callback) {
        Issue.count(criteria, function(err, filteredCount) {
            if (err) {
                callback(err);
            } else {
                callback(undefined, filteredCount);
            }
        });
    }

    // Find issues matching the filters.
    function findMatchingIssues(callback) {

        var query = Issue
            .find(criteria)

            .skip(offset)
            .limit(limit);


        // Execute the query.
        query.exec(function(err, issues) {
            if (err) {
                callback(err);
            } else {
                callback(undefined, issues);
            }
        });
    }

    // Set the pagination headers and send the matching issues in the body.
    function sendResponse(err, results) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        var totalCount = results[0],
            filteredCount = results[1],
            issues = results[2];

        // Return the pagination data in headers.
        res.set('X-Pagination-Page', page);
        res.set('X-Pagination-Page-Size', pageSize);
        res.set('X-Pagination-Total', totalCount);
        res.set('X-Pagination-Filtered-Total', filteredCount);

        res.send(issues);
    }

    async.parallel([
        countAllIssues,
        countFilteredIssues,
        findMatchingIssues
    ], sendResponse);
});
    // MY SHIT
   /* /!*  Issue.find(function (err, issues) {
     if (err) {
     res.status(500).send(err);
     return;
     }

     res.send(issues);
     });*!/
    var criteria = {};
    var page = req.query.page ? parseInt(req.query.page, 10) : 1,
        pageSize = req.query.pageSize ? parseInt(req.query.pageSize, 10) : 30;

    var offset = (page - 1) * pageSize,
        limit = pageSize;

    //OK UNTIL HERE, I UNDERSTAND
    Issue.count(function (err, totalCount) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.set('X-Pagination-Page', page);
        res.set('X-Pagination-Page-Size', pageSize);
        res.set('X-Pagination-Total', totalCount);

    });
    Issue.find(criteria).sort("date").skip(offset).limit(limit).exec(function (err, issues) {
        if (err) {
            res.status(500).send(err);
            return
        }
        res.send(issues);
    });
    /!*Issue.find(function(err, issue){
     if (err){
     res.status(500).send(err);
     return;
     }
     res.send(issue);
     });*!/*/



/**
 * @api {delete} /issues/:id Delete an issue with the id
 * @apiVersion 0.0.0
 * @apiName DeleteIssue
 * @apiGroup Issues
 *
 * @apiDescription  it's function can delete an issue with his id
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/4711
 *
 * @apiParam {String}                   description             The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
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
 * @api {get} /issues/:id Get an issue with the id
 * @apiVersion 0.0.0
 * @apiName GetIssue
 * @apiGroup Issues
 *
 * @apiDescription  it's function can get an issue with his id
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/4711
 *
 * @apiParam {String}                   description             The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
 */

/**!!!TODO SAB: /api/issues/:id_issue?embed=user&embed2=comment
 *
 * */
router.get('/:id', findIssue, function (req, res, next) { //add : ?embed=user&embed2=comment INCLUDE IN DOC
    res.send(req.issue);
});

/**
 * @api {put} /issues/:id Put an issue with the id
 * @apiVersion 0.0.0
 * @apiName PutIssue
 * @apiGroup Issues
 *
 * @apiDescription  it's function can modify an issue with his id
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/4711
 *
 * @apiParam {String}                   description             The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
 */


router.put('/:id', findIssue, function (req, res, next) {



//update partiel
    var updates = _.pick(req.body, 'type', 'coordinates', 'status', 'description'); //restreint les trucs à manger
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
 * @api {post} issues/:id_issue/comments Create a comment
 * @apiVersion 0.0.0
 * @apiName PostIssueComment
 * @apiGroup Issues
 *
 * @apiDescription  it's function can create a comment for an issue
 *
 * @apiExample Example usage:
 * http://localhost/api/issues/4711/comments
 *
 * @apiParam {String}                   description             The Description of the comments.
 *
 *
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
 * @apiError UnexpectedToken The issue has some parameters with uncorrect type
 * @apiError ValidationError There are missing parameters
 * @apiError Error404   The server has an unexpected error
 *
 * @apiErrorExample Response (Unexpected Token):
 *    <h1>Unexpected token j</h1>
 <h2>400</h2>
 <pre>SyntaxError: Unexpected token j
 *
 * @apiErrorExample {json} Response (Validation Error):
 * {"message": "Issue validation failed",
  "name": "ValidationError",
  "errors": {
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
    }
  }
}
 */


router.post('/:id_issue/comments', function (req, res, next) {
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