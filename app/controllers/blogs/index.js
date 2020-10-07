import Ember from 'ember';

export default Ember.Controller.extend({
  breadCrumb: 'Blogs',

  isEmpty: Ember.computed('model.length', function() {
    return this.get('model.length') == 0;
  })
});
