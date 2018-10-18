import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend({
// export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  afterModel(model) {
    model.get('team.players').setEach('onField', false);
  },

  willTransition(transition) {
    this.controller.set('model', null);
  }
});
