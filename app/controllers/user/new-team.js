import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  user: alias('model'),
  displayErrorMessage: false,
  primary: 'black',
  secondary: 'white',
  name: '',

  actions: {
    createTeam() {
      // verify input

      this.get('store').createRecord('team', {
        user: this.get('user'),
        name: this.get('name'),
        primary: this.get('primary'),
        secondary: this.get('secondary'),
      }).save().then((team) => {
        this.transitionToRoute('team.roster', team);
      });
    },
  },
});
