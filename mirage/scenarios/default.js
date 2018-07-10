export default function(server) {
  const players = server.createList('player', 15);
  const user = server.create('user', { email: 'tom@ketch.com', password: 'pass', playerId: 1 });
  const team = server.create('team', { players, user });

  const game = server.create('game', { ourScore: 3, theirScore: 2, closed: false, team });
  server.create('game', { ourScore: 15, theirScore: 11, team, opponentName: 'Flaming Croissants', opponentColor: 'orange'});
  server.create('game', { ourScore: 13, theirScore: 15, team, opponentName: 'Oddjob', opponentColor: 'yellow'});
  server.create('game', { ourScore: 15, theirScore: 6, team, opponentName: 'License to Kilt', oppponentColor: 'green'});

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
