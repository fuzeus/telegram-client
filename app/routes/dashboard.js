import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function(transition) {
    var authenticatedUser = this.controllerFor('application').get('authenticatedUser');
    if (!authenticatedUser) {
      this.transitionTo('auth');
    }
  },
  model: function() {
  return this.store.find('post');
}
});
