import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  point: belongsTo(),
  player: belongsTo(),
});
