import Controller from '@ember/controller';
import { alias, sort } from '@ember/object/computed';

export default Controller.extend({
  games: alias('model.games'),
  team: alias('model.team'),
  sortedGames: sort('games', 'sortByCreatedAt'),
  sortByCreatedAt: 'createdAt', // not hooked up
});
