/* global define */

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var NavView = require('views/navbar.view');
  var TestView = require('views/test.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    destroyView: function(view) {
      if(view !== undefined) {
        view.undelegateEvents();
        view.$el.removeData().unbind();
        view.remove();
        Backbone.View.prototype.remove.call(view);
      }
    },

    list: function() {
      var navView = new NavView();
      $('#nav').html(navView.render().el);
      var testView = new TestView();
      $('#app').html(testView.render().el);
    },

    swapView: function(view) {
      this.destroyView(this.currentView);
      $('#app').html(view.render().el);
      this.currentView = view;
    }
  });

  return Router;
});