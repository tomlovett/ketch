import Controller from '@ember/controller';

const { computed: { alias, and } } = Ember;

export default Controller.extend({
  team: alias('model'),
  bothInput: and('opponentName', 'opponentColor'),
  displayErrorMessage: false,
  opponentColor: 'black',
  opponentName: '',

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
