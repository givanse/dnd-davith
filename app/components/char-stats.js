import Ember from 'ember';

export default Ember.Component.extend({

  stats: null,

  abilities: Ember.computed('stats.abilities', function() {
    let abilities = this.get('stats.abilities');  
    return Object.keys(abilities).map(function(key) {
      return {
        name: key,
        value: abilities[key]
      };
    });
  }),

  _maxAbility: function(hash) {
    let max = 0;
    Object.keys(hash).map(function(key) {
      let obj = hash[key];
      if (obj.value> max) {
        max = obj.value;
      }
    });
    return max;
  },

  didInsertElement: function() {
    let data = this.get('abilities'); 

    var scale = d3.scale.linear()
      .domain([0, this._maxAbility(data)])
      .range([0, 420]);

    let chart = d3.select('.abilities_chart');
    let bar = chart.selectAll('div');
    let barUpdate = bar.data(data);
    let barEnter = barUpdate.enter().append('div');
    barEnter.style('width', function(d) { return scale(d.value) + 'px'; })
            .text(function(d) { return d.name + ' ' + d.value; });
  }

});
