import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  include: ['players'],
});
