import Controller from '@ember/controller';

const { computed: { alias } } = Ember;

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
