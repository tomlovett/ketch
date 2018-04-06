import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/game/:game_id' }, function() {
    this.route('play');

    this.route('recap', function() {
      this.route('points');
      this.route('players');
    });
  });
});

export default Router;
