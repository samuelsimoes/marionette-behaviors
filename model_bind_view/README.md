##Model Bind View

This behavior will help you to bind events on the form elements to get your values
on your model's attributes.

###Usage

With the included behavior on your view, on your template, you should identify the
model value that will receive the input value using the data attribute `model-attribute`,
like this:

```html
<input type="text" data-model-attribute="name" />
```

If you need a custom setter method to a input field you can declare the setter on
the behavior's options using the attribute name on the key and the setter name on
value, like this:

```js
var MyView = Marionete.ItemView({
  behaviors: {
    ModelViewBehavior: {
      name: "customNameSetter"
    },

    customNameSetter: function (value, evt) {
      this.model.set("name", value.toUpperCase());
    }
  }
});
```
