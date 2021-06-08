# Configuring SystemJS

If your project is using SystemJS for module loading, you will need to add ng-if-block-ui to the SystemJS configuration:

```js
System.config({
  // Existing configuration options
  map: {
    ...
    'ng-if-block-ui':        'npm:ng-if-block-ui/bundles/ng-if-block-ui.umd.js', // Required
    'ng-if-block-ui/http':   'npm:ng-if-block-ui/bundles/ng-if-block-ui-http.umd.js', // Optional
    'ng-if-block-ui/router': 'npm:ng-if-block-ui/bundles/ng-if-block-ui-router.umd.js' // Optional
  }
});
```