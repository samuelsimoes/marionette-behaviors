#Marionette Behaviors

Marionette Behaviors are like mixins to your Mariontte.js views, with behaviors
you can extract DOM interactions and reuse on your views.

This repo contains some useful Marionette.js Behaviors extracted from the apps
whose I contribute.

##Behaviors

###[Model Bind View](model_bind_view/)
This behavior will help you to bind events on the form inputs to get your values
on your model's attributes.

###[Modal View](modal_view/)
This behavior will help you to create modals with your Marionette Views.

###[Model Save Notificable View](model_save_notificable_view/)
This behavior will show a message with **[Notify.js](https://github.com/jpillora/notifyjs)** on
some [UI element](http://marionettejs.com/docs/v2.4.1/marionette.itemview.html#organizing-ui-elements) of your view when your view's model makes a request. This message status depends on the request's status.
