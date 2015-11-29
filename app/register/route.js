import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      var user = this.store.createRecord('user', {
        name : this.controller.get('name')
      });
      user.save().then(() => {
        console.log('Save successful!');
        this.controller.set('message',
          'A new user with the name "' + this.controller.get('name') + '" was added!'
        );
      }, function() {
        console.log('Save failed');
      });
    }
  }
});
