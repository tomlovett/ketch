import Component from '@ember/component';

const { computed } = Ember;

export default Component.extend({
  players: null,
  sortedPlayers: computed.sort('players', 'sorting'),
  sorting: ['firstName', 'lastName'],
});
