import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    if (!this.get('model.player.id')) {
      this.transitionTo('user.player');
    }
  },
});
