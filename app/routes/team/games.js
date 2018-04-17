import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    const teamId = this.modelFor('team').get('id');

    return RSVP.hash({
      team: this.modelFor('team'),
      games: this.store.query('game', { teamId }),
    });
  },
});
