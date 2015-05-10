(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["underscore", "marionette"], factory);
  } else if (typeof exports !== "undefined") {
    var Marionette = require("marionette");
    var _ = require("underscore");
    return module.exports = factory(_, Marionette);
  } else {
    root.ModelSaveNotificableViewBehavior = factory(root._, root.Marionette);
  }
})(this, function(_, Marionette) {
  var ModelSaveNotificableViewBehavior = Marionette.Behavior.extend({
    initialize: function () {
      // On the xhr object we don't have the request method, this hack inserts it
      // on the requestMethod key.
      $(document).ajaxSend(function(event, xhr, options) {
        xhr.requestMethod = options.type;
      });
    },

    modelEvents: {
      "error": "showErrorNotification",
      "sync": "showSuccessNotification"
    },

    defaults: {
      errorMessage: "Could not save, check the errors.",
      successMessage: "Successfully saved.",
      position: "top"
    },

    showSuccessNotification: function(model, resp, requestOptions) {
      // We don't want show on successful GET requests...
      if (!_.include(["PUT", "POST", "PATCH"], requestOptions.xhr.requestMethod)) {
        return;
      }

      var options = _.extend(this.options, { className: "success" });

      this.showMessage(this.options.successMessage, options);
    },

    showErrorNotification: function () {
      var options = _.extend(this.options, { className: "error" });

      this.showMessage(this.options.errorMessage, options);
    },

    showMessage: function(message, options) {
      if (this.options.uiElement) {
        this.view.ui[this.options.uiElement].notify(message, options);
      } else {
        $.notify(message, options);
      }
    }
  });

  return ModelSaveNotificableViewBehavior;
});
