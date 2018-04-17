import Controller from '@ember/controller';

const { computed: { equal } } = Ember;

export default Controller.extend({
  isF: equal('model.gender', 'f'),
  isM: equal('model.gender', 'm'),

  actions: {
    saveChanges() {
      this.get('model').save();
    },

    setGender(gender) {
      this.set('model.gender', gender);
    },
  },
});
