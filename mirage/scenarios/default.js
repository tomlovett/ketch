export default function(server) {
  const players = server.createList('player', 17);
  const team = server.create('team', { players });

  const game = server.create('game', { ourScore: 2, theirScore: 3, team });

  const line = players.slice(0, 7);
  const points = server.createList('point', 5, { game, players: line });
}
