import Ember from 'ember';

export default Ember.ArrayController.extend({
  session: Ember.inject.service('session'),

  actions: {
    toggleFollow: function(user) {
      user.toggleProperty('followedByAuthenticatedUser');
      if (user.get('followedByAuthenticatedUser')) {
        user.set('operation', "follow");
      } else {
        user.set('operation', "unfollow");
      }
      user.save();
    }
  }
});
