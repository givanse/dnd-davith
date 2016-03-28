import Ember from 'ember';

export default Ember.Component.extend({

  stats: null,

  modifiersList: Ember.computed('modifiers', function() {
    let modifiers = this.get('modifiers');

    if (! modifiers) {
      return null;
    }

    return Object.keys(modifiers).map(function(key) {
      return {
        name: key,
        value1: modifiers[key].value1,
        value2: modifiers[key].value2
      };
    });
  }),

  modifiers: Ember.computed('stats.abilities', function() {
    let abilities = this.get('stats.abilities');  

    if (! abilities) {
      return null;
    }

    let level = this.get('stats.level');  
    let modifiers = {};

    for (var ability of abilities) {
      let value = (ability.value - 10) / 2;
      value = Math.floor(value);

      let modifier = {
        value1: value, 
        value2: value + Math.floor(level / 2) 
      };
      modifiers[ability.name] = modifier; 
    }

    return modifiers;
  }),

  //TODO: feats and items are not accounted for
  skills: Ember.computed('stats.skills', 'modifiers', function() {
    let skills = this.get('stats.skills');

    if (! skills) {
      return null;
    }

    let modifiers = this.get('modifiers');

    for (var skill of skills) {
      let modifier = modifiers[skill.modifier];
      let value = modifier.value2 +
                  (skill.trained ? 5 : 0);
      skill.value = value; 
    }
  
    return skills;
  }),

  didInsertElement: function() {
    let abilities = this.get('stats.abilities'); 
    if (! abilities) { return; }
    this._renderGraph('.abilities_chart', abilities);

    let skills = this.get('skills'); 
    if (! skills) { return; }
    this._renderGraph('.skills_chart', skills);
  },

  _renderGraph(selector, data) {
    let barHeight = 20;
    let width = 420;

    let max = d3.max(data, function(d) { return d.value; });
    var x = d3.scale.linear()
      .domain([0, max])
      .range([0, width]);

    var chart = d3.select(selector)
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

    let paddingRight = 6;
    bar.append('text')
       .attr('class', 'anchor_end')
       .attr('x', function(d) { return x(d.value) - paddingRight; })
       .attr('y', barHeight / 2)
       .attr('dy', '.35em')
       .text(function(d) { return d.value; });

    let paddingLeft = 6;
    bar.append('text')
       .attr('class', 'anchor_start')
       .attr('x', paddingLeft)
       .attr('y', barHeight / 2)
       .attr('dy', '.35em')
       .text(function(d) { return d.name; });
  }

});
