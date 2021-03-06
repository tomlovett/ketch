import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  player: alias('model.player'),

  actions: {
    saveChanges() {
      this.get('player.content').save();
    },

    setGender(gender) {
      this.set('player.gender', gender);
    },
  },
});
