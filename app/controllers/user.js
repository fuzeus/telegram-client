import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  notAuthenticatedUser: function () {
    return this.get('model') !== this.get('session.authenticatedUser');
  }.property('model', 'session.authenticatedUser'),
  actions: {
    toggleFollowCurrentUser: function() {
      var model = this.get('model');
      model.toggleProperty('followedByAuthenticatedUser');
      if (model.get('followedByAuthenticatedUser')) {
        model.set('operation', "follow");
      } else {
        model.set('operation', "unfollow");
      }
      model.save();
    },
    logOut: function() {
      var controller = this;
      //can I directly change the authenticatedUser field to null like I've done below?
      //or do I have to make a reference to the applicationController and set the field from there?
      controller.get('session').set('authenticatedUser', null);
      //what about informing the server?
      //authenticatedUser.save().then(function() {

    //})
      Ember.$.post("/api/logout", function() {
        controller.store.unloadAll('post');
        controller.store.unloadAll('user');
        controller.transitionToRoute('auth.login');

      });
    }
  }
});
