import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logOut: function() {
      var controller = this;
      controller.get('session').set('authenticatedUser', null);
      Ember.$.post("/api/logout", function() {
        controller.store.unloadAll('post');
        controller.store.unloadAll('user');
        controller.transitionToRoute('auth.login');
      });
    }
  }
});
