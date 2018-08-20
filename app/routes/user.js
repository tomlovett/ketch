import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject } from '@ember/service';

// export default Route.extend(AuthenticatedRouteMixin, {
export default Route.extend({
  currentUser: inject(),

  model() {
    if (this.get('currentUser.user')) {
      return this.get('currentUser.user');
    }

    return this.get('currentUser').load().then(() => {
      return this.get('currentUser.user');
    });
  },
});
