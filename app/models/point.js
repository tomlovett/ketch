import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  game: belongsTo(),
  ourScore: attr('number'),
  players: hasMany(),
  theirScore: attr('number'),
  wePulled: attr('boolean'),
  weScored: attr('boolean'),
});
