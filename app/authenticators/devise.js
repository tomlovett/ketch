import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
  // serverTokenEndpoint: 'http://localhost:4200/users/sign_in'
});
