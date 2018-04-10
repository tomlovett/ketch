import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  serialize() {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    if (Array.isArray(json.data)) {
      json.data.forEach((data, i) => {
        json.data[i].relationships.teams.data = this.teamSerialize(data);
      });
    } else {
      json.data.relationships.teams.data = this.teamSerialize(json.data);
    }

    return json;
  },

  teamSerialize(data) {
    return data.relationships.teams.data.map(playerTeam => ({
      id: this.registry.schema.playerTeams.find(playerTeam.id).teamId,
      type: 'team',
    }));
  }
});
