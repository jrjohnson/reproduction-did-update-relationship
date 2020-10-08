import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ViewerComponent extends Component {
  @tracked comments;

  @action
  async load() {
    const comments = await this.args.post.comments;
    this.comments = comments.mapBy('text');
  }
}
