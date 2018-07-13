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
      if (!this.get('name')) {
        this.set('errorMessage', 'Please enter a team name.');
      }

      let players = [this.get('user.player.content')];

      this.get('store').createRecord('team', {
        name: this.get('name'),
        players,
        primary: this.get('primary'),
        secondary: this.get('secondary'),
        user: this.get('user'),
      }).save().then((team) => {
        this.transitionToRoute('team.roster', team);
      });
    },
  },
});
