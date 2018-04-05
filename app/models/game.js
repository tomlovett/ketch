import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  opponent: attr('string', { defaultValue: 'Them' }),
  ourScore: attr('number', { defaultValue: 0 }),
  theirScore: attr('number', {defaultValue: 0 }),
  team: belongsTo('team'),
});
