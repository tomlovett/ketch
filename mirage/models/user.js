import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  player: belongsTo(),
  teams: hasMany(),
});
