(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["marionette"], factory);
  } else if (typeof exports !== "undefined") {
    var Marionette = require("marionette");
    return module.exports = factory(Marionette);
  } else {
    root.ModelBindViewBehavior = factory(root.Marionette);
  }
})(this, function(Marionette) {
  var ModelBindViewBehavior = Marionette.Behavior.extend({
    events: {
      "change [data-model-attribute]": "updateModelAttribute"
    },

    updateModelAttribute: function(evt) {
      var target = $(evt.currentTarget),
          attributeName = target.data("model-attribute"),
          customSetterName = this.options[attributeName],
          value;

      if (target.is(":checkbox")) {
        value = target.is(":checked");
      } else {
        value = target.val();
      }

      if (customSetterName) {
        this.view[customSetterName](value, evt);
        return;
      }

      this.view.model.set(attributeName, value);
    }
  });

  return ModelBindViewBehavior;
});
