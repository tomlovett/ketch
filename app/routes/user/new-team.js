import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);

    const team = this.store.createRecord('team', {
      name: '',
      primary: 'black',
      secondary: 'white'
    });
    controller.set('team', team);
  }
});
