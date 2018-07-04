import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),

  isF: equal('model.gender', 'f'),
  isM: equal('model.gender', 'm'),

  actions: {
    createUser() {
      if (!(this.get('model.email') && this.get('model.password') && this.get('model.passwordConfirmation'))) {
        this.set('errorMessage', 'Please enter all values.');
        return;
      }

      this.set('errorMessage', '');
      const newUser = this.get('model')

      newUser.save().catch((error) => {
        this.set('errorMessage', error);
      }).then(()=>{
        this.get('session')
        .authenticate('authenticator:devise',
          newUser.get('email'), newUser.get('password'))
        .catch((reason) => {
          this.set('errorMessage', reason.error ||reason);
        });
      });
    },

    setGender(gender) {
      this.set('model.gender', gender);
    },
  },
});
