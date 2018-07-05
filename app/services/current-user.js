import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  session: inject(),
  store: inject(),

  init() {
    this._super(...arguments);
    this.load();
  },

  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { me: true }).catch(() => {
        this.get('session').invalidate();
      }).then((user) => {
        this.set('user', user);
      });
    } else {
      return Ember.RSVP.resolve();
    }
  },
});
