import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  name: '',
  username: '',
  password: '',
  email: '',
  error: null,

  actions: {
    signup: function() {
      var name = this.get('name');
      var username = this.get('usermame');
      var password = this.get('password');
      var email = this.get('email');
      var controller = this;
      var user = this.store.createRecord('user', {
        id: username,
        name: name,
        password: password,
        operation: 'signup'
      });
      user.save().then(function(user) {
        controller.get('session').set('authenticatedUser', user);
        controller.transitionToRoute('dashboard');
      }, function (response) {
        console.log(response.responseText);
      });
    }
  }

});
