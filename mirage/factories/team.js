import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  primary: faker.list.cycle('orange', 'purple'),
  secondary: faker.list.cycle('white', 'white'),
  name: faker.list.cycle('Flaming Croissants', 'Purple Jerk'),
});
