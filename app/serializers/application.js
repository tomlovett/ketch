import { underscore } from '@ember/string';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('normalizeResponse -> payload: ', payload);
    const normalizedResponse = this._super(...arguments);
    console.log('normalizedResponse: ',normalizedResponse)
    return normalizedResponse
  }
});
