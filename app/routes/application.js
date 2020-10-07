import Ember from 'ember';
/* global $ */

export default Ember.Route.extend({
  actions: {

    toggleSidebar: function() {
      $('body').toggleClass('sidebar-collapse sidebar-open');
    }
  }
});
