import Ember from 'ember';

export default Ember.Component.extend({
  authenticated: function () {
    return this.get('authenticatedUser');
  }.property('authenticatedUser'),
  
  actions: {
    sendLogOut: function() {
      this.sendAction('loggingOut', this.get('authenticatedUser'));
    }
  }
});
