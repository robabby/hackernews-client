import Ember from 'ember';

export default Ember.Route.extend({
  apiService: Ember.inject.service('api-service'),
  model: function() {
    var apiService = this.get("apiService");
    return apiService.getNewStories();
  }
});
