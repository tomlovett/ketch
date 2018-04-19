import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({
  firstName: '',
  lastName: '',
  gender: '',
  nickname: '',

  isF: equal('gender', 'f'),
  isM: equal('gender', 'm'),

  actions: {
    createUser() {
      if (!(this.get('firstName') && this.get('lastName') && this.get('gender'))) {
        return;
      }

      this.get('store').createRecord('user', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        nickname: this.get('nickname'),
        gender: this.get('gender'),
      }).save().then((user) => {
        this.transitionToRoute('user.teams', user);
      });
    },

    setGender(gender) {
      this.set('gender', gender);
    },
  },
});
