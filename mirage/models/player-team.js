import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  player: belongsTo(),
  team: belongsTo(),
});
