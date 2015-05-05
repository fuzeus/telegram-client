import Ember from 'ember';

export default Ember.ArrayController.extend({
  session: Ember.inject.service('session'),
  newPostText: '',
  maxLength: 140,

  charLeft: function () {
    return this.get('maxLength') - this.get('newPostText.length');
  }.property('maxLength', 'newPostText'),

  overLimit: function() {
    return this.get('charLeft') < 0;
  }.property('charLeft'),

  actions: {
    createPost: function() {
      var newPostText = this.get('newPostText');
      var authenticatedUser = this.get('session.authenticatedUser');
      var post = this.store.createRecord('post', {
        body: newPostText,
        author: authenticatedUser,
        createdDate: new Date()

      });
      sortAscending: true;
      this.set('newPostText', '');
      post.save();
    },

    deletePost: function(post) {
      post.destroyRecord();
    },

    repost: function(post, authenticatedUser) {
      var repost = this.store.createRecord('post', {
        body: post.body,
        author: authenticatedUser,
        createdDated: new Date(),
        repost: post
      });
      repost.save();
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
