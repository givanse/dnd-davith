import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('char-items', 'Integration | Component | char items', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    items: [
      {level: 9, name: 'gleaming diamond bracers'}
    ]
  });

  this.render(hbs`{{char-items model=model}}`);

  assert.ok(/gleaming diamond bracers/.test(this.$().text()));
});
