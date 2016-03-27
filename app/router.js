import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('char', {
    path: '/char/:char_name'
  }, function() {
    this.route('profile');
    this.route('powers');
    this.route('items');
    this.route('stats');
  });
});

export default Router;
