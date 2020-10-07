import Ember from 'ember';
/* global _ */

export default Ember.Controller.extend({
  breadCrumb: "<i class='fa fa-dashboard'></i>Home",
  breadCrumbPath: 'index',

  contentHeader: function() {
    var header = this.currentPath.split('.')[0];
    return header !== 'index' ? _.capitalize(header) : 'Dashboard';
  }.property('currentPath')

});
