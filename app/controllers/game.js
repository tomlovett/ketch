import Controller from '@ember/controller';

const { computed: { alias } } = Ember;

export default Controller.extend({
  game: alias('model'),
  team: alias('game.team'),
  players: alias('team.players'),
});
