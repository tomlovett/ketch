import Controller from '@ember/controller';

const { computed: { alias } } = Ember;

export default Controller.extend({
  team: alias('model'),

  colors: ['red', 'red-orange', 'orange', 'yellow-orange', 'yellow', 'yellow-green', 'green', 'blue', 'light-blue', 'dark-blue', 'pink', 'purple', 'white', 'brown', 'black'],

  actions: {
    save() {
      this.get('team').save().then(() => {
        this.transitionToRoute('team');
      });
    },
  },
});
