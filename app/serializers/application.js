import DS from 'ember-data';
import { singularize } from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments)

     json.data.attributes = this.underscoreKeys(json.data.attributes)

     return json;
  },

  underscoreKeys(obj) {
    let k, underscored;

     for (k in obj) {
      underscored = k.underscore()

       if (k !== underscored) {
        obj[underscored] = obj[k]
        delete obj[k]
      }
    }

    return obj
  },

  serializeBelongsTo(snapshot, json, relationship) {
    const key = `${relationship.key}_id`
    const value = snapshot.belongsTo(relationship.key, { id: true });

    json.attributes[key] = value
  },

  serializeHasMany(snapshot, json, relationship) {
    const key = `${singularize(relationship.key)}_ids`
    const values = snapshot.hasMany(relationship.key, { ids: true });

    json.attributes[key] = values || []
  },
});
