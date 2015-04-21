import Ember from 'ember';

export default Ember.ArrayController.extend({
  name: '',

  actions: {
    signup: function() {
      var user = this.store.createRecord('user', {
        id: username,
        name: name,
        password: password,
        operation: 'signup'
      });
      user.save().then(function(user) {
        this.transitionToRoute('dashboard');
      }, function (response) {
        console.log(response.responseText);
      });
    }
  }
});
