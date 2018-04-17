import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  livePlayer: null,
  isF: equal('livePlayer.gender', 'f'),
  isM: equal('livePlayer.gender', 'm'),

  actions: {
    deletePlayer() {
      if (this.get('livePlayer.id')) {
        this.get('livePlayer').destroyRecord();
      }

      this.resetLivePlayer();
    },

    editPlayer(player) {
      this.set('livePlayer', player);
    },

    resetPlayer() {
      this.resetLivePlayer();
    },

    savePlayer() {
      const player = this.get('livePlayer');

      if (this.get('livePlayer.id')) {
        player.save();
      } else {
        this.get('store').createRecord('player', player).save();
      }

      this.resetLivePlayer();
    },

    setGender(gender) {
      this.set('livePlayer.gender', gender);
    },
  },

  resetLivePlayer() {
    const team = this.get('model');

    this.set('livePlayer', { team });
  },
});
