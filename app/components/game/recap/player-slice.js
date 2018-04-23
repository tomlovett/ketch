import Component from '@ember/component';
import { filter, map, sum } from '@ember/object/computed';

export default Component.extend({
  points: null,
  player: null,

  containsPlayer: filter('points', function(point) {
    return point.get('players').includes(this.get('player'));
  }),

  scoredByToNumbers: map('containsPlayer', function(point) {
    return point.get('weScored') ? 1 : -1;
  }),
  
  plusMinus: sum('scoredByToNumbers'),
});
