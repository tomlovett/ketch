import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  game: hasMany(),
  name: attr('string'),
  players: hasMany(),
  primary: attr('string'),
  secondary: attr('string'),
  users: hasMany(),
});
