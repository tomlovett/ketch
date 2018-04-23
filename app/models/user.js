import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  teams: hasMany(),
  gender: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  nickname: attr('string'),

  handle: computed('nickname', 'firstName', function() {
    return this.get('nickname') || this.get('firstName');
  }),
});
