import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['font-sample'],

  computedStyle: computed('css', function() {
    return htmlSafe(this.css);
  }),

  uniqId: computed('elementId', function() {
    return `id_${this.elementId}`;
  })
});
