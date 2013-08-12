var ctx = require('./context.js');

exports.copy = {

  testUpdateApp: function (test) {
    var task = ctx.newTask(['myapp', 'update']);

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 update .');

    test.done();
  },

  testUpdateAppInAnotherDirectory: function (test) {
    var task = ctx.newTask(['myapp', 'update'], {
      directory: "myapp/"
    });

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 update myapp/');

    test.done();
  },

  testUpdateIndexes: function (test) {
    var task = ctx.newTask(['myapp', 'update_indexes']);

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 update_indexes .');

    test.done();
  },

  testUpdateWithCustomVersion: function (test) {
    var task = ctx.newTask(['myapp', 'update'], {
      manageFlags: {
        version: "1.0"
      }
    });

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 --version=1.0 update .');

    test.done();
  },

  testUpdateWithCustomApplication: function (test) {
    var task = ctx.newTask(['myapp', 'update'], {
      manageFlags: {
        application: "myapp"
      }
    });

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 --application=myapp update .');

    test.done();
  },

  testUpdateAllBackends: function (test) {
    var task = ctx.newTask(['myapp', 'update'], {
      backend: true
    });

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 backends . update');

    test.done();
  },

  testUpdateSingleBackend: function (test) {
    var task = ctx.newTask(['myapp', 'update'], {
      backend: true,
      backendName: "crawler"
    });

    var result = task.execute(true);
    test.equals(result, 'appcfg.py --oauth2 backends . update crawler');

    test.done();
  }

};