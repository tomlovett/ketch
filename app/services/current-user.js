import Service from '@ember/service';
import { inject } from '@ember/service';
import { resolve } from 'rsvp';

export default Service.extend({
  session: inject(),
  store: inject(),

  init() {
    this._super(...arguments);
    this.load();
  },

  load() {
    return this.get('store').findRecord('user', 1).then((user) => {
      this.set('user', user)
    })
    // if (this.get('session.isAuthenticated')) {
    //   return this.get('store').queryRecord('user', { me: true }).catch(() => {
    //     this.get('session').invalidate();
    //   }).then((user) => {
    //     this.set('user', user);
    //   });
    // } else {
    //   return resolve();
    // }
  },
});
