import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);

    controller.resetLivePlayer();
  },

  willTransition() {
    const player = this.get('livePlayer');
    
    player.get('id') ? player.rollbackAttributes() : player.unloadRecord();
  }
});
