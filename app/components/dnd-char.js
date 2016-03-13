import Ember from 'ember';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
const fixture = 
{
  name: 'Davith',

  race: {
    name: 'goliath',
    source: 'PH2, p12'
  },

  charClass: {
    name: 'seeker',
    source: 'PH3, p116'
  },

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
    {
      name: 'punishing rebuke',
      source: ''
    },
    {
      name: 'two-weapon fighting',
      source: 'PH1 - heroic tier feats, p197'
    },
    {
      name: 'far throw',
      source: 'PH1 - heroic tier feats, p197'
    }
  ],

  features: {
    race: [
      {
        name: 'mountain\'s tenacity',
        source: 'PH2, p12'
      },
      {
        name: 'stone\'s endurance',
        source: 'PH2, p12'
      },
      {
        name: 'powerful athlete',
        source: 'PH2, p12'
      }
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
  })

});
