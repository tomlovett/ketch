import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  // authorizer: 'authorizer:devise',
  host: 'http://localhost:3000',
});
