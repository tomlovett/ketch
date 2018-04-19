import Controller from '@ember/controller';
import { alias, sort } from '@ember/object/computed';

export default Controller.extend({
  players: alias('model.players'),
  points: alias('model.points'),
  team: alias('model.team'),

  sortedPlayers: sort('players', function(a, b) {
    return a.get('gender') <= b.get('gender') && a.get('firstName') > b.get('firstName');
  }),
});
