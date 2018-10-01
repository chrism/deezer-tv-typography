'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    includeHighlightStyle: false,
    prember: {
      urls: [
        '/',
        '/stacks'
      ]
    }
  });

  return app.toTree();
};
