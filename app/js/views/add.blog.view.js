define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var blogTemplate = require('hbs!app.templates/add.blog');

  var BlogView = Backbone.View.extend({
    template: blogTemplate,

    render: function() {
      this.setElement(this.template());
      return this;
    }
  });

  return BlogView;
});