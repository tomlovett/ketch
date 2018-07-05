import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  currentUser: inject(),

  model() {
    this.get('currentUser.user');
  },
});
