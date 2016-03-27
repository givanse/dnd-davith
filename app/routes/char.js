import Ember from 'ember';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader
const fixture = 
{
  name: 'Davith',

  size: 'M',

  age: 40,

  gender: 'male', 

  height: 2.3,

  weight: 180,

  alignment: 'unaligned',

  deity: '',

  languages: ['common', 'giant'],

  race: {
    name: 'goliath',
    source: 'PH2 p12'
  },

  charClass: {
    name: 'seeker',
    source: 'PH3 p116'
  },

  paragon: {
    name: 'swift strider',
    source: 'PH3 p133'
  },

  epicDestiny: {
    name: 'blank',
    source: ''
  },

  stats: {
    level: 10,
    exp: 26000,

    hp: 77,
    surge_value: 19,
    surges: 9,

    movement: 6,

    actionPoints: 0,

    abilities: {
      strength: 20,
      constitution: 15,
      dexterity: 14,
      intelligence: 14,
      wisdom: 21,
      charisma: 13
    }
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
      source: 'PH1 p197'
    },
    {
      name: 'far throw',
      source: 'PH1 p197'
    }
  ],

  features: {
    race: [
      {
        name: 'mountain\'s tenacity',
        source: 'PH2 p12'
      },
      {
        name: 'stone\'s endurance',
        source: 'PH2 p12'
      },
      {
        name: 'powerful athlete',
        source: 'PH2 p12'
      }
    ],
    charClass: [
      {name: 'inevitable shot'},
      {name: 'spiritbond'},
      {name: 'spirits\' rebuke'}
    ],
    paragon: [
      {
        name: 'defensive shift',
        source: 'PH3 p133'
      },
      {
        name: 'escaping action',
        source: 'PH3 p133'
      }
    ],
    destiny: [
    ]
  },

  items: [
    {level: 9, name: 'gleaming diamond bracers'}
  ]
};

export default Ember.Route.extend({

  model: function(params) {
    /*return this.store.find('char', char_name);*/
    if (params.char_name === 'davith') {
      return fixture;
    }
  }

});
