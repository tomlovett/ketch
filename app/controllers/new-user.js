import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),

  isF: equal('model.gender', 'f'),
  isM: equal('model.gender', 'm'),

  actions: {
    createUser() {
      if (!(this.get('model.firstName') && this.get('model.lastName') && this.get('model.gender'))) {
        this.set('errorMessage', 'Please enter a first name, last name and gender.');
        return;
      }

      this.set('errorMessage', '');
      const newUser = this.get('model')

      this.get('store').createRecord('user', {
        firstName: this.get('model.firstName'),
        lastName: this.get('model.lastName'),
        nickname: this.get('model.nickname'),
        gender: this.get('model.gender'),
      }).save().catch((error) => {
        this.set('errorMessage', error);
      }).then(()=>{
        this.get('session')
        .authenticate('authenticator:devise',
          newUser.get('email'), newUser.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error ||reason);
        });
      })//.then((user) => {
      //   this.transitionToRoute('user.teams', user);
      // });
    },

    setGender(gender) {
      this.set('model.gender', gender);
    },
  },
});
