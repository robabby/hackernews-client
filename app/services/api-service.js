import Ember from 'ember';

export default Ember.Service.extend({
  getTopStories() {
    return Ember.$.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(data){
        return data.splice(0, 10);
      });
  },
  getNewStories() {
    return Ember.$.getJSON("https://hacker-news.firebaseio.com/v0/newstories.json").then(function(data){
        return data.splice(0, 10);
      });
  }
});
