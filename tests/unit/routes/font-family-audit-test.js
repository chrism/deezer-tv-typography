import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | font-family-audit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:font-family-audit');
    assert.ok(route);
  });
});
