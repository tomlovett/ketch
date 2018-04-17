import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    const userId = this.modelFor('user').get('id');

    return RSVP.hash({
      user: this.modelFor('user'),
      teams: this.store.query('team', { userId }),
    });
  },
});
