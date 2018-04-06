import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    const game = this.modelFor('game');
    const team = game.get('team');

    return RSVP.hash({
      game: game,
      points: this.get('store').query('point', { game: game.get('id') }),
      team: team,
    });
  }
});
