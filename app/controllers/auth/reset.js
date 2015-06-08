import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  message: '',
  error: '',

  actions: {
    resetPassword: function () {
      var email = this.get('email');
      var controller = this;

      var user = this.store.createRecord('user', {
        email: email,
        operation: 'resetPassword'
      })

      user.save().then(function(user) {
        controller.set('email', null);
      }, function (response) {
        controller.set('error', response.responseText);
      });
    }
  }
});
