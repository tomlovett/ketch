import Controller from '@ember/controller';

const { computed: { alias, filterBy, uniq } } = Ember;

export default Controller.extend({
  game: alias('model'),
  team: alias('game.team'),
  players: alias('team.players'),

  men: filterBy('players', 'gender', 'm'),
  benchMen: filterBy('men', 'onField', false),
  fieldMen: filterBy('men', 'onField', true),

  women: filterBy('players', 'gender', 'f'),
  benchWomen: filterBy('women', 'onField', false),
  fieldWomen: filterBy('women', 'onField', true),

  onField: uniq('fieldMen', 'fieldWomen'),
  inPlay: false,
  point: null,

  actions: {
    sub(player) {
      if (this.get('inPlay')) {
        return;
      }

      player.toggleProperty('onField');
    },
  }
});
