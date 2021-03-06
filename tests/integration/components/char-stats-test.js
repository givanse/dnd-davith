import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('char-stats', 'Integration | Component | char stats', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('stats', {
    exp: 9001
  });

  this.render(hbs`{{char-stats stats=stats}}`);

  assert.ok(/exp: 9001/.test(this.$().text()));
});
