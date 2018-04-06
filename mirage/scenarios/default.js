export default function(server) {
  const players = server.createList('player', 17);
  const team = server.create('team', { players });

  const game = server.create('game', { team });

  const line = players.slice(0, 6);
  const points = server.createList('point', 5, { game, players: line });
}
