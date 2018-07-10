import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  player: alias('model.player'),

  actions: {
    saveChanges() {
      this.get('player').save(); // broken
    },

    setGender(gender) {
      this.set('player.gender', gender);
    },
  },
});
