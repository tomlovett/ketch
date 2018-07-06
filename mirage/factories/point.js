import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  ourScore(i) {
    return Math.floor(i/2) + 1;
  },
  theirScore(i) {
    return Math.floor((i-1) / 2) + 1;
  },
  wePulled(i) {
    return (i % 2 == 1);
  },
  weScored(i) {
    return (i % 2 == 0);
  },
});
