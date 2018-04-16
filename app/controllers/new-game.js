import Controller from '@ember/controller';

const { computed: { alias, and } } = Ember;

export default Controller.extend({
  team: alias('model'),
  colors: ['red', 'red-orange', 'orange', 'yellow-orange', 'yellow', 'yellow-green', 'green', 'blue', 'light-blue', 'dark-blue', 'pink', 'purple', 'white', 'brown', 'black'],
  displayErrorMessage: false,
  bothInput: and('opponentName', 'opponentColor'),
  opponentName: '',
  opponentColor: 'black',

  actions: {
    createGame() {
      if (!this.get('bothInput')) {
        this.set('displayErrorMessage', true);
        return;
      }

      this.get('store').createRecord('game', {
        team: this.get('team'),
        opponentColor: this.get('opponentColor'),
        opponentName: this.get('opponentName'),
      }).save().then((game) => {
        this.transitionToRoute('game.play', game);
      });
    },
  },
});
