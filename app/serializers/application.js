import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { 'todos': payload }
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
