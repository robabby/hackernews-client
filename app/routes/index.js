import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model: function() {
    var data = {};
    data.topStories = $.getJSON("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(response) {
      var items = [];
      response.forEach( function (item) {
        items.push(item);
      });

      return items;
    });

    console.log(data);

    return data;
  }
});
