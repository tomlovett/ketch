import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend({
// export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  // authorizer: 'authorizer:devise',
  host: 'http://localhost:3000',
});
