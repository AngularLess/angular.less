# Angular.Less

This directive allows you to add [Less]
and [PrefixFree] support
for your Angular application.

## Requirements

- [AngularJS] 1.x or newer
- [Less.JS] 1.x or newer
- [PrefixFree] (optional)


## Install

You can install this package either with [npm] or with [bower].

### [npm]

```sh
npm install angular.less
```

Add the Angular.Less module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', [require('$Less')]);
```


### [bower]

```sh
bower install angular.less
```

This will copy the Angular.Less files into a `bower_components` folder,
along with its dependencies. Load the script files in your application (`index.html`):

```html
<script type="text/javascript" src="bower_components/prefix-free/prefixfree.min.js"></script>
<script type="text/javascript" src="bower_components/less.js/less.min.js"></script>
<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular.less/angular.less.js"></script>
```

Add the Angular.Less module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', ['$Less']);
```

## Usage

Now you can use the power of Less CSS preprocessor in your application
by using default HTML tag `link`.
To start off, link your `.less` stylesheets with the rel attribute set to `"stylesheet/less"`:

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

[AngularJS]: https://angularjs.org/
[Less.JS]: http://lesscss.org/
[Less]: http://lesscss.org/
[PrefixFree]: http://leaverou.github.io/prefixfree/

[Bower]: http://bower.io/
[npm]: https://www.npmjs.com/
