import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  gender: attr('string'),
  lastName: attr('string'),
  nickname: attr('string'),
  point: hasMany(),
  team: belongsTo(),
  stat: hasMany(),

  handle: computed('nickname', 'firstName', function() {
    const nickname = this.get('nickname');

    return nickname ? `"${nickname}"` : this.get('firstName');
  }),
});
