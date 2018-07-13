import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(user) {
    if (!user.get('player.id')) {
      this.transitionTo('user.player');
    }
  },
});
