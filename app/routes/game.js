import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  afterModel(model) {
    model.get('team.players').forEach((player) => {
      player.set('onField', false);
    })
  },
});
