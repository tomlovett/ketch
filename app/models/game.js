import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  closed: attr('boolean', { defaultValue: false }),
  opponentName: attr('string'),
  opponentColor: attr('string'),
  ourScore: attr('number', { defaultValue: 0 }),
  point: hasMany(),
  theirScore: attr('number', {defaultValue: 0 }),
  team: belongsTo(),
});
