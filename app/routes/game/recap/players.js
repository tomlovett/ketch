import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const { players, points } =  this.modelFor('game.recap');
    console.log('model: ', this.modelFor('game.recap'));

    console.log('players: ', players);

    return { players, points };
  }
});
