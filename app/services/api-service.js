import Ember from 'ember';

let apiUrl = "https://hacker-news.firebaseio.com/v0/";

export default Ember.Service.extend({
  getTopStories() {
    return Ember.$.getJSON(apiUrl + "topstories.json").then(function(data){
        return data;
      });
  },
  getNewStories() {
    return Ember.$.getJSON(apiUrl + "newstories.json").then(function(data){
        return data;
      });
  }
});
