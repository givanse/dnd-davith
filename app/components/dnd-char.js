import Ember from 'ember';

export default Ember.Component.extend({

  race: Ember.computed('model.race', function() {
    let race = this.get('model.race');
    return {
      name: race,
      imgSrc: 'images/races/' + race + '/index.png' 
    };
  })

});
