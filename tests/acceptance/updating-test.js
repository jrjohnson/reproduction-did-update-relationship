import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | updating', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('updating', async function(assert) {
    this.server.logging = true;
    const post = this.server.create('post');
    this.server.createList('comment', 3, {
      post,
    });
    await visit('/');

    assert.equal(currentURL(), '/');

    await this.pauseTest();
  });
});
