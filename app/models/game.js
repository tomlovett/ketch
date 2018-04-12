import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  opponentName: attr('string', { defaultValue: 'SPAM' }),
  opponentColor: attr('string', { defaultValue: 'blue' }),
  ourScore: attr('number', { defaultValue: 0 }),
  point: hasMany(),
  theirScore: attr('number', {defaultValue: 0 }),
  team: belongsTo(),
});
