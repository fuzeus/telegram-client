import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: null,
  model: function() {
    var currentUser = this.modelFor('user');
    this.store.find("user", {followedBy: currentUser.get("id")});
  }
});
