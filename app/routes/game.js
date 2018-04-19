import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('game', params.game_id);
  },

  afterModel(model) {
    const players = model.get('team.players');

    players.setEach('onField', false);
  },
});
