import Ember from 'ember';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
const fixture = 
{
  name: 'Davith',

  powers: {
    atWill: [
      {level: 1, name: 'grappling spirits'},
      {level: 1, name: 'guardian harrier'}
    ],
    encounter: [
      {level: 7, name: 'feyjump shot'},
      {level: 3, name: 'stampede shot'},
      {level: 1, name: 'possesing spirits'}
    ],
    daily: [
      {level: 9, name: 'nature\'s vengeance'},
      {level: 1, name: 'fungal blooms'},
      {level: 5, name: 'corralling shot'}
    ],
    utility: [
      {level: 2, name: 'stone spirit ward'},
      {level: 10, name: 'burrowing stride'},
      {level: 6, name: 'eagle\'s aim'}
    ]
  },

  items: [
    {level: 9, name: 'gleaming diamond bracers'}
  ]
};

export default Ember.Component.extend({

  model: Ember.computed(function() {
    return fixture;
  })

});
