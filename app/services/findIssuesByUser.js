
var express = require('express'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Issue = mongoose.model('Issue');


function findIssuesByUser(req, res, next) {


    // Find the user.

    //User.findById(re) //TODO callback function like issue.find but with else if

    var criteria = {
     user: req.user._id //autre Middleware avant
     };


    Issue.find(criteria, function (err, issues) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        // Store the user in the request.
        req.issues = issues;

        next();
    });
}

module.exports=findIssuesByUser;