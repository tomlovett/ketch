import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  closed: true,
  ourScore: 3,
  theirScore: 2,
  opponentColor: 'purple',
  opponentName: 'Purple Jerk',
});
