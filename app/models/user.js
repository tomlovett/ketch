import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  teams: hasMany(),
  email: attr('string'),
  password: attr('string'),
});
