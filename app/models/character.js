import DS from 'ember-data';

export default DS.Model.extend({

  primaryKey: 'name',  

  name: DS.attr('string'),
  race: DS.attr(),
  class: DS.attr(),
  paragon: DS.attr(),
  stats: DS.attr(),
  powers: DS.attr(),
  feats: DS.attr(),
  features: DS.attr(),
  items: DS.attr()

});
