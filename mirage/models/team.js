import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  players: hasMany('player-team'),
});
