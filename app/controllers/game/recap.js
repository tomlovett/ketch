import Controller from '@ember/controller';
import { alias, sort } from '@ember/object/computed';

export default Controller.extend({
  game: alias('model.game'),
  team: alias('model.team'),
  players: alias('model.players'),
  points: alias('model.points'),

  sortedPoints: sort('points', function(a, b) {
    const aTotal = a.get('ourScore') + a.get('theirScore');
    const bTotal = b.get('ourScore') + b.get('theirScore');

    return aTotal <= bTotal ? -1 : 1;
  }),
});
