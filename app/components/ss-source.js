import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ss_source'],

  source: null,

  showSource: false,

  _update: function() {
    let source = this.get('source');
    if (! source) {
      return;
    }

    this.toggleProperty('showSource');
  },

  mouseEnter: function() {
    this._update();
  },

  mouseLeave: function() {
    this._update();
  }
});
