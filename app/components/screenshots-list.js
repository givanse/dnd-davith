import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['powers_at_will'],

  title: '',
 
  path: '',

  list: [],

  //TODO: computed.sort()
  ssItems: Ember.computed('list', function() {
    let list = this.get('list');

    if (! list) {
      return list;
    }

    list = list.sortBy('level');

    return list;
  })

});
