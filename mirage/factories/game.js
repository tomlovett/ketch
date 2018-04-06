import { association, Factory } from 'ember-cli-mirage';

export default Factory.extend({
  ourScore: 3,
  theirScore: 2,
  team: association(),
});
