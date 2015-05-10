(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["marionette"], factory);
  } else if (typeof exports !== "undefined") {
    var Marionette = require("marionette");
    return module.exports = factory(Marionette);
  } else {
    root.ModalViewBehavior = factory(root.Marionette);
  }
})(this, function(Marionette) {
  var ModalViewBehavior = Marionette.Behavior.extend({
    defaults: {
      "overlayIdentifier": "#black-overlay",
      "uiCloseBtn": "closeBtn"
    },

    ui: {
      "closeBtn": ".close-btn"
    },

    initialize: function() {
      if (!this.view.className) {
        this.view.className = "modal";
      }

      $("html").on("keyup.modal", _.bind(this.onPressEsc, this));
      $(this.options.overlayIdentifier).on("click.modal", _.bind(this.view.close, this.view));
    },

    events: {
      "click @ui.uiCloseBtn": "closeModal"
    },

    closeModal: function(evt) {
      evt.preventDefault();
      this.view.close();
    },

    onPressEsc: function(e) {
      if(e.keyCode !== 27) { return; }
      this.view.close();
    },

    onRender: function() {
      $(this.options.overlayIdentifier).show();
    },

    onClose: function() {
      $("html").off(".modal");
      $(this.options.overlayIdentifier).hide().off(".modal");
    }
  });

  return ModalViewBehavior;
});
