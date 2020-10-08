import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ChangerComponent extends Component {
  @service store;

  @action
  addComment() {
    const comment = this.store.createRecord('comment', {
      post: this.args.post,
      text: Math.random().toString(),
    });
    comment.save();
  }

  @action
  async clearComments() {
    const comments = (await this.args.post.comments).toArray();
    for (let i = 0; i < comments.length; i++) {
      comments[i].post = null;
      await comments[i].save();
    }
    this.args.post.set('comments', []);
    this.args.post.save();
  }

  @action
  async removeFirstComment() {
    const comments = (await this.args.post.comments).toArray();
    await comments[0].destroyRecord();
  }
}
