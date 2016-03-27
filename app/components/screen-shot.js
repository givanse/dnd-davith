import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['screen_shot'],

  toggleImage: true, // hide true

  model: null,

  path: null,

  isNotBlank: Ember.computed('model.name', function() {
    return this.get('model.name') !== 'blank';
  }),

  imgSrc: Ember.computed('path', function() {
    let name = this.get('model.name');

    let path = this.get('path');

    return 'images/' + path + name + '.png';
  }),

  click: function() {
    this.toggleProperty('toggleImage');
  }

});
