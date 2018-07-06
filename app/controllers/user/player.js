import Controller from '@ember/controller';
import { alias, equal } from '@ember/object/computed';

export default Controller.extend({
  player: alias('model.player'),

  isF: equal('player.gender', 'f'),
  isM: equal('player.gender', 'm'),

  actions: {
    saveChanges() {
      this.get('player').save();
    },

    setGender(gender) {
      this.set('player.gender', gender);
    },
  },
});
