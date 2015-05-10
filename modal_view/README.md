##Modal View

This behavior will help you to create modals with your Marionette Views. This
behavior include on your view the follow behaviors:

* On show it brings a black overlay to visual focus on your modal.
* On close it hide the black overlay.
* On click on the overlay it closes.
* Pressing esc key it closes.
* Add the "modal" CSS class to your view if you don't have specified the `className`
on your view.

###Usage
The usage is very simple. Just include the behavior and add a black overlay
on your app's markup, like this:

```html
<div id="black-overlay"></div>
```
with this CSS:
```css
#black-overlay {
  background: black;
  opacity: 0.5;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 10;
  display: none;
}
```

You can specify the [**UI element**](http://marionettejs.com/docs/v2.4.1/marionette.itemview.html#organizing-ui-elements) to close the modal on the `uiCloseBtn` option key, the default is `closeBtn`.

You can also specify the black overlay on the `overlayIdentifier` option key. The
default is `#black-overlay`.
