import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: inject(),

  model() {
    return this.get('currentUser').load().then(() => {
      return this.get('currentUser.user');
    });
  },
});
