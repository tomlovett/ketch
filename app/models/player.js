import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  gender: attr('string'),
  lastName: attr('string'),
  teams: hasMany(),
});
