var express = require('express'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Issue = mongoose.model('Issue'),
    Comment = mongoose.model('Comment');

function findAction(req, res, next) {

    var query = Issue.action.findById(req.params.action_id);


    query.exec(function (err, action) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!user) {
            res.status(404).send('user not found');
            return;
        }

        // Store the issue in the request.
        req.action = action;

        next();
    });
}

module.exports = findAction;