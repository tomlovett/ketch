import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  player: belongsTo(),
  point: belongsTo(),
  type: attr('string'),
});
