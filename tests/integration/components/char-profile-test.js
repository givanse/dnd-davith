import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('char-profile', 'Integration | Component | char profile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
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
    }
  });

  this.render(hbs`{{char-profile model=model}}`);

  assert.ok(/goliath/.test(this.$().text()));
  assert.ok(/seeker/.test(this.$().text()));
  assert.ok(/swift strider/.test(this.$().text()));
});
