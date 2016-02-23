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

  production: {
    root: rootPath,
    app: {
      name: 'teaching-heigvd-cm-webs-2016-project'
    },
    port: 3000,
    db: 'mongodb://localhost/teaching-heigvd-cm-webs-2016-project-production'
  }
};

module.exports = config[env];
