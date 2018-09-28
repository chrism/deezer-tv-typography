'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    includeHighlightStyle: false,
    prember: {
      urls: [
        '/',
        '/stacks'
      ]
    },
    postcssOptions: {
      filter: {
        enabled: true,
        plugins: [
          {
            module: purgecss,
            options: {
              content: ['./app/**/*.hbs', './app/**/.js']
            }
          }
        ]
      }
    }
  });

  return app.toTree();
};
