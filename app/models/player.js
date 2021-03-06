import DS from 'ember-data';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  gender: attr('string'),
  lastName: attr('string'),
  nickname: attr('string'),
  point: hasMany(),
  stat: hasMany(),
  team: belongsTo(),
  user: belongsTo(),

  handle: computed('nickname', 'firstName', function() {
    return this.get('nickname') || this.get('firstName');
  }),

  isF: equal('gender', 'f'),
  isM: equal('gender', 'm'),
});
