import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // authorizer: 'authorizer:devise',
  host: 'http://localhost:3000',
});
