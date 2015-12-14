import Ember from 'ember';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
const fixture = 
{
  name: 'Davith',

  race: 'goliath',

  charClass: 'seeker',

  stats: {
    exp: 26000,

    max_hp: 77,
    surge_value: 19,
    surges: 9,

    movement: 6,

    strength: 20,
    constitution: 15,
    dexterity: 14,
    intelligence: 14,
    wisdom: 21,
    charisma: 13
  },

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

  feats: [
    {name: 'punishing rebuke'},
    {name: 'two-weapon fighting'},
    {name: 'far throw'}
  ],

  features: {
    race: [
      {name: 'mountain\'s tenacity'},
      {name: 'stone\'s endurance'},
      {name: 'powerful athlete'}
    ],
    charClass: [
      {name: 'inevitable shot'},
      {name: 'spiritbond'},
      {name: 'spirits\' rebuke'}
    ],
    path: [
    ],
    destiny: [
    ]
  },

  items: [
    {level: 9, name: 'gleaming diamond bracers'}
  ]
};

export default Ember.Component.extend({

  model: Ember.computed(function() {
    return fixture;
  }),

  race: Ember.computed('model.race', function() {
    let race = this.get('model.race');
    return {
      name: race,
      imgSrc: 'images/races/' + race + '/index.png' 
    };
  }),

  charClass: Ember.computed('model.charClass', function() {
    let charClass = this.get('model.charClass');
    return {
      name: charClass,
      imgSrc: 'images/classes/' + charClass + '.png' 
    };
  })

});
