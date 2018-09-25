import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  showCode: false,
  classNames: ['mb-8'],

  computedStyle: computed('css', function() {
    return htmlSafe(this.css);
  }),

  actions: {
    toggleCode() {
      this.toggleProperty('showCode');
    }
  }
});
