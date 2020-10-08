import Model, { hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @hasMany('comment') comments;
}
