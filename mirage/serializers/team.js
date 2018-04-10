import JSONAPISerializer from './application';

export default JSONAPISerializer.extend({
  // include: ['players'],

  serialize() {
    let json = JSONAPISerializer.prototype.serialize.apply(this, arguments);

    console.log('json before: ', json);

    if (Array.isArray(json.data)) {
      json.data.forEach((data, i) => {
        json.data[i].relationships.players.data = this.playerSerialize(data)
      });
    } else {
      json.data.relationships.players.data = this.playerSerialize(json.data);
    }

    console.log('json after: ', json);
    return json;
  },

  playerSerialize(data) {
    let playerId;

    // return data.relationships.players.data.map((playerTeam) => {
    //   playerId = this.registry.schema.playerTeams.find(playerTeam.id).playerId;

    //   console.log('query: ', this.registry.schema.players.find(playerId))
    //   return this.registry.schema.players.find(playerId);
    // })
    return data.relationships.players.data.map(playerTeam => ({
      id: this.registry.schema.playerTeams.find(playerTeam.id).playerId,
      type: 'player',
    }));
  },
});
