import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['screen_shot'],

  toggleImage: true, // hide true

  model: null,

  path: null,

  imgSrc: Ember.computed('path', function() {
    let path = this.get('path');
    let name = this.get('model.name');

    return 'images/' + path + name + '.png';
  }),

  click: function() {
    this.toggleProperty('toggleImage');
  }

});
