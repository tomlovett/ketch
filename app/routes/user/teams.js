import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  currentUser: inject(),

  model() {
    const userId = this.get('currentUser.user.id');

    return RSVP.hash({
      user: this.get('currentUser.user'),
      teams: this.store.query('team', { userId }),
    });
  },
});
