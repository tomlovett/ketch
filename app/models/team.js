import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  game: hasMany(),
  name: attr('string'),
  players: hasMany(),
  primary: attr('string'),
  secondary: attr('string'),
  user: belongsTo(),
});
