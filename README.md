# COMEM Web Services 2016 Project - Flavia Pittet and Sabine Rochat

Course: [https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016](https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016)

##Content of api
This api is used to manage and report issues within a geographic area, such as grafitis or broken installations.
It manages users, staff and/or citizens. For now, the authentication hasn't been implemented.


##Instalation

after the clone, you need to install all node_modules, including: async, express, jade, grunt, etc. before running the application
To run your server, enter: "grunt" on your command line and start mongoDB (mongod).
Your application should run on port 3000 by default.



##APIDocJS
The apidoc is accessible by the homepage

###Routes
our api routes all start by /api/... and are all documented in the apidoc


####Issue
POST/issues/:id/comments
POST/issues/:id_issue/comments
POST/issues/:id/tags
POST/issues/:id/actions
POST/issues
DELETE/issues/:id
GET/issues
GET/issues/:id
GET/issues/status
PUT/issues/:id

####User
POST/users
DELETE/users/:id
GET/users/citizens
GET/users/:id/issues
GET/users/staffs
GET/users
GET/users/:id
PUT/users/:id

####Comment
POST/comments/:action_id/:id
POST/comments
DELETE/comments/id
GET/comments
GET/comments/id
PUT/comments/:id