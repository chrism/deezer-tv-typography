import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('font-family-audit', { path: '/' });
  this.route('testing-stacks', { path: '/stacks' });
});

export default Router;
