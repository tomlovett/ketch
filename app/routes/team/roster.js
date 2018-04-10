import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    // const team = this.modelFor('team');
    // const players = this.get('store').query('player', { team: team.get('id') })
    // console.log('players: ', players);
    // // console.log('team: ', team);
    // return RSVP.hash({
    //   team: team,
    //   // players: this.get('store').query('player', { team }),
    // });
    return this.modelFor('team');
  },
});
