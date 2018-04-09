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

  liveStatType: null,
  liveStatPlayer: null,
  queuedStats: [],

  actions: {
    clearLine() {
      this.get('onField').forEach((player => {
        player.toggleProperty('onField');
      }));
    },

    clickPlayer(player) {
      if (this.get('inPlay')) {
        const statPlayer = player == this.get('liveStatPlayer') ? null : player;
        this.set('liveStatPlayer', statPlayer);

        this.saveStat();
      } else {
        player.toggleProperty('onField');
      }
    },

    clickStat(type) {
      const statType = this.get('liveStatType') ? null : type;

      this.set('liveStatType', statType);

      this.saveStat();
    },

    recordScore(weScored) {
      const teamScore = weScored ? 'game.ourScore' : 'game.theirScore'

      this.incrementProperty(teamScore);
      this.savePoint(weScored);

      this.toggleProperty('inPlay');
    },
  },

  savePoint(weScored) {
    const point = this.get('store').createRecord('point', {
      ourScore: this.get('game.ourScore'),
      players: this.get('onField'),
      theirScore: this.get('game.theirScore'),
      weScored: weScored,
    }).save();

    this.get('game').save();

    this.saveQueuedStats(point);
  },

  saveStat() {
    const type = this.get('liveStatType');
    const player = this.get('liveStatPlayer');

    if (!(type && player)) {
      return;
    }

    const stat = this.get('store').createRecord('stat', {
      player,
      type
    });

    this.get('queuedStats').push(stat);
  },

  saveQueuedStats(point) {
    this.get('queuedStats').setEach('point', point);

    this.get('queuedStats').forEach(function(statObj) {
      statObj.save();
    });

    this.set('queuedStats', []);
  },
});
