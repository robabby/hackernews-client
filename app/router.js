import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');

  this.route('stories', { path: '/' }, function() {
    this.route('top');
    this.route('new');
  });
  this.route('login');
});

export default Router;
