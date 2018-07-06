import Controller from '@ember/controller';

export default Controller.extend({
  livePlayer: null,

  actions: {
    deletePlayer() {
      this.get('livePlayer').destroyRecord();
      this.resetLivePlayer();
    },

    editPlayer(player) {
      this.set('livePlayer', player);
    },

    resetPlayer() {
      this.get('livePlayer').rollbackAttributes();
      this.resetLivePlayer();
    },

    savePlayer() {
      if (!this.verifyAttributes()) {
        return;
      }

      this.get('livePlayer').set('team', this.get('model')).save();
      this.resetLivePlayer();
    },

    setGender(gender) {
      this.set('livePlayer.gender', gender);
    },
  },

  resetLivePlayer() {
    this.set('errorMessage', '');
    this.set('livePlayer', this.get('store').createRecord('player'));
  },

  verifyAttributes() {
    if (!this.get('livePlayer.firstName') || !this.get('livePlayer.lastName') || !this.get('livePlayer.gender')) {
      this.set('errorMessage', 'Please set values for first name, last name and gender.');
      return false;
    }

    return true;
  },
});
