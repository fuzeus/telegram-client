import Ember from 'ember';

export default Ember.ArrayController.extend({
  username: '',
  password: '',

  actions: {
    login: function() {
      var user = this.store.createRecord('user', {
        id: username,
        password: password,
        operation: 'login'
      });
      user.save().then(function(user) {
        this.transitionToRoute('dashboard');
      }, function (response) {
        console.log(response.responseText);
      });
    }
  }
});
