import Ember from 'ember';

export default Ember.CollectionView.extend({
  tagName: 'tbody',

  itemViewClass: Ember.View.extend({
    templateName: 'blogs/list-row'
  })
});
