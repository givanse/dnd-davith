import Ember from 'ember';

export default Ember.Component.extend({

  stats: null,

  abilities: Ember.computed('stats.abilities', function() {
    let abilities = this.get('stats.abilities');  

    if (! abilities) {
      return null;
    }

    return Object.keys(abilities).map(function(key) {
      return {
        name: key,
        value: abilities[key]
      };
    });
  }),

  didInsertElement: function() {
    let data = this.get('abilities'); 

    if (! data) {
      return;
    }

    let barHeight = 20;
    let width = 420;

    let max = d3.max(data, function(d) { return d.value; });
    var x = d3.scale.linear()
      .domain([0, max])
      .range([0, width]);

    var chart = d3.select('.abilities_chart')
      .attr('width', width)
      .attr('height', barHeight * data.length);

    var bar = chart.selectAll('g')
        .data(data)
      .enter().append('g')
        .attr('transform', function(d, i) {
          return 'translate(0,' + i * barHeight + ')';
        });

    bar.append('rect')
       .attr('width', function(d) { return x(d.value); })
       .attr('height', barHeight - 1);

    bar.append('text')
       .attr('x', function(d) { return x(d.value) - 3; })
       .attr('y', barHeight / 2)
       .attr('dy', '.35em')
       .text(function(d) { return d.name + ' ' + d.value; });
  }

});
