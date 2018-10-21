import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
  session: inject('session'),
  user: inject('currentUser'),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
  }
});
