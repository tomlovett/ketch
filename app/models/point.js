import DS from 'ember-data';
import { computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  game: belongsTo(),
  ourScore: attr('number'),
  players: hasMany(),
  theirScore: attr('number'),
  wePulled: attr('boolean'),
  weScored: attr('boolean'),

  playerString: computed('players', function() {
    const names = this.get('players').mapBy('handle');
    return names.sort().join(', ');
  }),
});
