var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'teaching-heigvd-cm-webs-2016-project'
    },
    port: 3000,
    db: 'mongodb://localhost/sabFlav-development' //nom BD
  },

  test: {
    root: rootPath,
    app: {
      name: 'teaching-heigvd-cm-webs-2016-project'
    },
    port: 3000,
    db: 'mongodb://localhost/teaching-heigvd-cm-webs-2016-project-test'
  },

  production: { //prévu pour Heroku / ex
    root: rootPath,
    app: {
      name: 'teaching-heigvd-cm-webs-2016-project'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/teaching-heigvd-cm-webs-2016-project-production'
  }
};

module.exports = config[env];

//$NODE_ENV = production;