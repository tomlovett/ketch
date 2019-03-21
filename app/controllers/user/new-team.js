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
      if (!this.get('team.name')) {
        this.set('errorMessage', 'Please enter a team name.');
        return;
      }

      const team = this.get('team');
      const user = this.get('user');
      team.get('users').pushObject(this.get('user'));
      team.get('players').pushObject(this.get('user.player.content'));

      team.save().then((teamModel) => {
        this.transitionToRoute('team.roster', teamModel);
      });
    },
  },
});
