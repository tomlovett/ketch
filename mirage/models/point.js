import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  game: belongsTo(),
  players: hasMany(),
});
