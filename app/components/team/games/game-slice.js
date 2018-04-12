import Component from '@ember/component';

const { computed } = Ember;

export default Component.extend({
  game: null,
  team: null,
  showExpanded: false,
  opponentColor: computed.or('game.opponentColor', 'team.secondary'),

  colorClass: computed('game', function() {
    const weWon = this.get('game.ourScore') >= this.get('game.theirScore');

    return weWon ? this.get('team.primary') : this.get('opponentColor');
  }),
});
