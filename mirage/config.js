export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('games/:id');
  this.get('games', (schema, request) => {
    const teamId = request.queryParams.teamId;

    return schema.games.where({ teamId });
  })
  this.patch('games/:id');
  this.post('games');

  this.get('players/:id');
  this.patch('players/:id');
  this.post('players');
  this.del('players/:id');

  this.get('points');
  this.post('points');
  this.put('points/:id', (schema, request) => {
    return request.requestBody;
  }, 201);

  this.post('stats');

  this.get('teams/:id');
  this.get('teams', (schema, request) => {
    const userId = request.queryParams.userId;

    return schema.teams.where({ userId });
  });
  this.patch('teams/:id');
  this.post('teams');

  this.get('users/:id');
  this.patch('users/:id');
  this.post('users');
}
