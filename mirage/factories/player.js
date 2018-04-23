import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName: faker.list.cycle('Tom', 'Arda', 'Ben', 'Nick', 'Lauren', 'Bekah', 'Joe', 'Emma', 'Emma', 'Min', 'Sam', 'Ronnie', 'Marley', 'Michelle', 'Temple'),

  lastName: 'A',

  nickname: faker.list.cycle('', 'Hey Arda!', '', 'NC', 'LoCo', 'The Wrekah', '', '', 'High School Emma', '', 'Chalfin', 'Fresh Ronnie', '', '', '',),

  gender: faker.list.cycle('m', 'f', 'm', 'm', 'f', 'f', 'm', 'f', 'f', 'm', 'm', 'm', 'f', 'f', 'm'),
});
