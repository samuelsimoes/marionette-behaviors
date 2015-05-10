##Model Save Notificable View

This behavior will show a message with **[Notify.js](https://github.com/jpillora/notifyjs)** on
some [UI element](http://marionettejs.com/docs/v2.4.1/marionette.itemview.html#organizing-ui-elements) of your view when your view's model makes a request. This message status depends on the request's status.

###Usage
The usage is simple. You need the **[Notify.js](https://github.com/jpillora/notifyjs)** on your app.

The options to this behaviors are:

* `uiElement`: the ui element identifier where the behavior should show the message. The default is `saveBtn`.
* `successMessage`: the message to show when successful saves. The default is "Successfully saved.".
* `errorMessage`: the message to show when error saves. The default is "Could not save, check the errors.".

The rest of behavior's options are passed to the `$.notify`.
