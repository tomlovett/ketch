import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  games: alias('model.games'),
  team: alias('model.team'),
});
