import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  showCode: false,
  classNames: ['font-sample'],

  computedStyle: computed('css', function() {
    return htmlSafe(this.css);
  }),

  actions: {
    toggleCode() {
      this.toggleProperty('showCode');
    }
  }
});
