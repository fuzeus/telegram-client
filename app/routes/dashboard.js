import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel: function(transition) {
    var authenticatedUser = this.get('session.authenticatedUser');
    if (!authenticatedUser) {
      this.transitionTo('auth.login');
    }
  },

  model: function() {
<<<<<<< HEAD
    this.get('session.authenticatedUser');
=======
>>>>>>> f894d581e6600e54bf4eeb86640027ab305c7b98
    return this.store.find('post');
  }
});
