import Component from '@ember/component';
import { filter, filterBy, map, sum } from '@ember/object/computed';

export default Component.extend({
  points: null,
  player: null,

  containsPlayer: filter('points', function(point) {
    return point.get('players').includes(this.get('player'));
  }),

  dPoints: filterBy('containsPlayer', 'wePulled'),
  oPoints: filterBy('containsPlayer', 'wePulled', false),

  dPointsToResult: map('dPoints', function(point) {
    return point.get('weScored') ? 1 : -1;
  }),

  oPointsToResult: map('oPoints', function(point) {
    return point.get('weScored') ? 1 : -1;
  }),

  dPlusMinus: sum('dPointsToResult'),
  oPlusMinus: sum('oPointsToResult'),
});
