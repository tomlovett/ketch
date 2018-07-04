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
  this.route('login');
  this.route('new-user');
  this.route('team', { path: 'team/:team_id' }, function() {
    this.route('edit');
    this.route('roster');
    this.route('games');
    this.route('new-game');
  });
  this.route('user', function() {
    this.route('edit');
    this.route('teams');
    this.route('new-team');
  });
});

export default Router;
