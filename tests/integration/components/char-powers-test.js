import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('char-powers', 'Integration | Component | char powers', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('model', {
    powers: {
      atWill: [
        {level: 1, name: 'grappling spirits'},
        {level: 1, name: 'guardian harrier'}
      ]
    }
  });

  this.render(hbs`{{char-powers model=model}}`);

  assert.ok(/grappling spirits/.test(this.$().text()));
  assert.ok(/guardian harrier/.test(this.$().text()));
});
