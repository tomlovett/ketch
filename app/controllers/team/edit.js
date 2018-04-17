import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  team: alias('model'),

  actions: {
    save() {
      this.get('team').save().then(() => {
        this.transitionToRoute('team');
      });
    },
  },
});
