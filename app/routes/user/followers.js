import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var currentUser = this.modelFor('user');
    return this.store.find("user", {follows: currentUser.get("id")});
  }
});
