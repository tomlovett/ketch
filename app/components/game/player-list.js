import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  players: null,
  sortedPlayers: computed.sort('players', 'sorting'),
  sorting: ['handle', 'lastName'],
});
