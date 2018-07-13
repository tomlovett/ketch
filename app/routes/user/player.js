import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(user) {
    if (!user.get('player.id')) {
      return this.get('store').createRecord('player', { user });
    }
  },
});
