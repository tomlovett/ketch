import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    if (!this.get('model.player')) {
      const user = this.get('model');
      this.get('store').createRecord('player', { user })
    }
  },
});
