import { association, Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },

  gender: faker.list.cycle('m', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm'),

  lastName() {
    return faker.name.lastName();
  },
});
