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
    const nickname = this.get('nickname');

    return nickname ? `"${nickname}"` : this.get('firstName');
  }),
});
