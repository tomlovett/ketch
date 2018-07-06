import Controller from '@ember/controller';
import { alias, sort } from '@ember/object/computed';

export default Controller.extend({
  players: alias('model.players'),
  points: alias('model.points'),
  team: alias('model.team'),

  playerSorting: ['handle'],
  sortedPlayers: sort('players', 'playerSorting'),
});
