import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['screen_shot'],

  toggleImage: true, // hide true

  click: function() {
    this.toggleProperty('toggleImage');
  }

});
