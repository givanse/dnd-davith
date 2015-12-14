import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['screen_shot_img'],

  classNameBindings: ['hide'],

  hide: Ember.computed.alias('toggleImage') 

});
