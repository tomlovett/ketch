import Controller from '@ember/controller';
import { alias, filterBy, uniq } from '@ember/object/computed';

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
  wePulled: true,

  liveStatType: null,
  liveStatPlayer: null,
  queuedStats: [],

  actions: {
    clearLine() {
      this.get('onField').setEach('onField', false);
    },

    clickPlayer(player) {
      if (this.get('inPlay')) {
        const statPlayer = this.get('liveStatPlayer') === player ? null : player;
        this.set('liveStatPlayer', statPlayer);

        this.saveStat();
      } else {
        player.toggleProperty('onField');
      }
    },

    clickStat(type) {
      const statType = this.get('liveStatType') === type ? null : type;

      this.set('liveStatType', statType);

      this.saveStat();
    },

    recordScore(weScored) {
      const teamScore = weScored ? 'game.ourScore' : 'game.theirScore';

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
      wePulled: this.get('wePulled'),
      weScored: weScored,
    }).save();

    weScored ? this.set('wePulled', true) : this.set('wePulled', false);

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
