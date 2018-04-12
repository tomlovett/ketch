import Controller from '@ember/controller';

const { computed: { alias } } = Ember;

export default Controller.extend({
  games: alias('model.games'),
  team: alias('model.team'),
});
