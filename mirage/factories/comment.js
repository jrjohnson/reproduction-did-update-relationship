import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  text: () => Math.random().toString(),
});
