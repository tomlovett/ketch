export default function(server) {
  const players = server.createList('player', 17);
  const team = server.create('team', { players });

  server.create('game', { team });
}
