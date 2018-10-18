import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serialize(snapshot, options) {
    let json = this._super(...arguments)

    json.data.attributes = this.underscoreKeys(json.data.attributes) // has to be updated
    json.data.relationships = this.underscoreKeys(json.data.relationships)

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
  }
});
