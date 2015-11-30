import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.query('user', {
        name: this.controller.get('name')
      }).then((users) => {
        if(users.get('length') === 1) {
          var user = users.objectAt(0);
          this.controllerFor('application').set('user', user);
          this.transitionTo('notebooks', user.get('id'));
        } else {
          console.log('Unexpected query result');
        }
      });
    }
  }
});
