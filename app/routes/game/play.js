import Route from '@ember/routing/route';

export default Route.extend({
  afterModel(model) {
    if (model.get('closed')) {
      this.transitionTo('game.recap.points', model);
    }
  }
});
