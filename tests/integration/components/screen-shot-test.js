import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('screen-shot', 'Integration | Component | screen shot', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{screen-shot}}`);

  assert.equal(this.$().text().trim(), 'ERROR: missing name.');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#screen-shot}}
    {{/screen-shot}}
  `);

  assert.equal(this.$().text().trim(), 'ERROR: missing name.');
});
