export default function(server) {
  server.createList('team', 2);
  const players = server.createList('player', 30);

  for (let i = 1; i < 15; i++) {
    server.create('player-team', { teamId: 1, playerId: i});
  }

  for (let i = 15; i < 30; i++) {
    server.create('player-team', { teamId: 2, playerId: i});
  }

  const game = server.create('game', { teamId: 1 });

  // const line = players.slice(0, 7);
  // const points = server.createList('point', 5, { game, players: line });
}
