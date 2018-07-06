import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, AuthenticatedRouteMixin, {
  currentUser: inject(),

  beforeModel(transition) {
    if (transition.intent.url === "/") { // janky
      this.transitionTo('user.teams');
    }
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser();
  },

  _loadCurrentUser() {
    return this.get('currentUser').load().catch(() => this.get('session').invalidate());
  },
});
