export default function(server) {
  const user = server.create('user', { firstName: 'Tom', lastName: 'Lovett' });
  const players = server.createList('player', 17);
  const team = server.create('team', { players, user });

  const game = server.create('game', { ourScore: 3, theirScore: 2, team });
  server.create('game', { ourScore: 15, theirScore: 11, team, opponentName: 'Flaming Croissants'});
  server.create('game', { ourScore: 13, theirScore: 15, team, opponentName: 'Oddjob', opponentColor: 'yellow'});
  server.create('game', { ourScore: 15, theirScore: 6, team, opponentName: 'License to Kilt'});

  for (let i = 0; i < 5; i++) {
    shuffle(players);
    const line = players.slice(0, 7);

    server.create('point', { game, players: line });
  }
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
