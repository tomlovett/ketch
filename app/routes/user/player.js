import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(user) {
    if (!user.get('player.id')) {
      this.get('store').createRecord('player', { user }); // fucking up
    }
  },
});
