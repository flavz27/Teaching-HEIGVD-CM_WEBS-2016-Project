
var express = require('express'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

function findUser(req, res, next) {

    var query = User
        .findById(req.params.id);


    query.exec(function (err, user) {
        if (err) {
            res.status(500).send(err);
            return;
        } else if (!user) {
            res.status(404).send('user not found');
            return;
        }

        // Store the issue in the request.
        req.user = user;

        next();
    });
}

module.exports=findUser;