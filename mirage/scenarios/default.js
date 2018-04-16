export default function(server) {
  const user = server.create('user', { firstName: 'Tom', lastName: 'Lovett' });
  const players = server.createList('player', 17);
  const team = server.create('team', { players, user });

  const game = server.create('game', { ourScore: 2, theirScore: 3, team });
  server.create('game', { ourScore: 15, theirScore: 11, team, opponentName: 'Flaming Croissants'});
  server.create('game', { ourScore: 13, theirScore: 15, team, opponentName: 'Oddjob', opponentColor: 'yellow'});
  server.create('game', { ourScore: 15, theirScore: 6, team, opponentName: 'License to Kilt'});

  const line = players.slice(0, 7);
  server.createList('point', 5, { game, players: line });
}
