define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var testTemplate = require('hbs!app.templates/test');

  var TestView = Backbone.View.extend({
    template: testTemplate,

    render: function() {
      this.$el.html(this.template());
      return this;
    }
  });
  return TestView;
});