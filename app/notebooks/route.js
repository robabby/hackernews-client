import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('notebook', {user: params.user_id });
  },
  actions: {
    addNotebook: function() {
      var notebook = this.store.createRecord('notebook', {
        title: this.controller.get('title'),
        user: this.controllerFor('application').get('user')
      });
      notebook.save().then(() => {
        console.log('Save successful!');
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        console.log('Save failed');
      });
    }
  }
});
