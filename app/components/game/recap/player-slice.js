import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  points: null,
  player: null,

  containsPlayer: computed.filter('points', function(point) {
    return point.get('players').includes(this.get('player'));
  }),

  scoredByToNumbers: computed.map('containsPlayer', function(point) {
    return point.get('weScored') ? 1 : -1;
  }),
  
  plusMinus: computed.sum('scoredByToNumbers'),
});
