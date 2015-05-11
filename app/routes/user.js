import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  currentUser: null,
  model: function(params) {
    var currentUser = this.store.find('user', params.user_id);
    return currentUser;

  }


});
