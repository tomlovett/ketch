import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    debugger
    return this.get('store').findRecord('user', params.user_id);
  },
});
