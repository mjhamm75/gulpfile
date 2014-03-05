/* global define */

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var TestView = require('views/test.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "list"
    },

    list: function() {
      var testView = new TestView();
      $('#app').html(testView.render().el);
    }
  });

  return Router;
});