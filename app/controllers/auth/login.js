import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  username: '',
  password: '',
  error: null,

  actions: {
    login: function() {
      var username = this.get('username');
      var password = this.get('password');
      var controller = this;
      if (Ember.isEmpty(username)){
        alert('Please enter username');
      }
      else {}
      var user = this.store.createRecord('user', {
        id: username,
        password: password,
        operation: 'login'
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
