# Angular.Less

This directive allows you to add [Less] and [PrefixFree] on the fly support
for your Angular application ([example]).

## Requirements

- [AngularJS] 1.x or newer
- [Less.JS] 1.x or newer
- [PrefixFree] An optional but recommended

## Install

You can install this package either with [npm] or with [bower].

### [npm]

```sh
npm install angular.less
```

Add the Angular.Less module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', [require('angular.less')]);
```


### [bower]

```sh
bower install angular.less
```

This will copy the Angular.Less files into a `bower_components` folder,
along with its dependencies. Load the script files in your application (`index.html`):

```html
<script type="text/javascript" src="bower_components/prefix-free/prefixfree.min.js"></script>
<script type="text/javascript" src="bower_components/less/dist/less.min.js"></script>
<script type="text/javascript" src="bower_components/angular.js/angular.min.js"></script>
<script type="text/javascript" src="bower_components/angular.less/angular.less.js"></script>
```

Add the Angular.Less module as a dependency to your application module:

```javascript
var myAppModule = angular.module('MyApp', ['angular.less']);
```

## Usage

Now you can use the power of Less CSS preprocessor in your application
by using default HTML tag `link`.
To start off, link your `.less` stylesheets with the rel attribute set to `"stylesheet/less"`:

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

Visit plugin [example] page to see how it works.


[Example]: https://angularless.github.io/
[AngularJS]: https://angularjs.org/
[Less]: http://lesscss.org/
[Less.JS]: http://lesscss.org/#client-side-usage
[PrefixFree]: https://leaverou.github.io/prefixfree/

[Bower]: http://bower.io/search/?q=angular.less
[npm]: https://www.npmjs.com/package/angular.less
