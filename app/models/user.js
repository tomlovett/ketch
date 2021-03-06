import DS from 'ember-data';

const { attr, hasMany, belongsTo } = DS;

export default DS.Model.extend({
  teams: hasMany(),
  email: attr('string'),
  password: attr('string'),
  player: belongsTo(),
});
