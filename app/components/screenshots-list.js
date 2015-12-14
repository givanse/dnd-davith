import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['powers_at_will'],

  title: '',
 
  path: '',

  list: [],

  ssItems: Ember.computed('list', function() {
    let list = this.get('list');

    if (! list) {
      return list;
    }

    list = list.sortBy('level');

    return list.map(item => {
      let path = this.get('path');

      item.imgSrc = 'images/' + path + item.name + '.png';

      return item;
    }); 
  })

});
