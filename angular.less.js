/**
 * Angular.Less - Less CSS preprocessor support for AngularJS
 *
 * This directive allows you to add Less and PrefixFree on the fly support 
 * for your Angular application.
 *
 * Requirements:
 * - [AngularJS] 1.x or newer
 * - [Less.JS] 1.x or newer
 * - [PrefixFree] An optional but recommended
 *
 * Site: https://github.com/AngularLess/angular.less/
 * Demo: https://angularless.github.io/
 *
 * @version 0.0.3
 *
 * @license BSD License
 * @author Max Chuhryaev
 */
angular.module('angular.less', []).directive('link', function($compile, $http) {

  var clearHREF = function(href, base) {
    var s = (typeof href == 'string') ? href.replace(/([?#].*)$/i, '') : '';
    if (base) s = s.replace(/[^\/]+$/i,'');
    return s;
  };

  var stylesheet = function(str) {
    var o = document.createElement("style");
    o.type = "text/css";
    if(o.styleSheet) o.styleSheet.cssText = str;
    else o.appendChild(document.createTextNode(str));
    return o;
  };

  var complete = function(callback) {
    return function (e, r) { if (typeof callback == 'function') callback(e, r) }
  };

  var parse = function (string, callback) {
    var done = complete(callback);
    if (less != null && typeof less.render == 'function') { // 2.x
      less.render(string, {compress:true}, function (e, r) {
        return e ? done(e) : done(null, r.css);
      });
    }
    else if (less != null && less.Parser != null) { // 1.x
      (new less.Parser).parse(string, function (e, tree) {
        return e ? done(e) : done(null, tree.toCSS({compress:true}));
      });
    }
    else return done('LESS compiler is not defined');
  };

  var toStylesheet = function compile (string, callback) {
    var done = complete(callback);
    parse(string, function(e, r){
      if (e) return done(e);
      var css = stylesheet(r);
      if (StyleFix) StyleFix.styleElement(css);
      done(null, css);
    });
  };

  var _getLess = {};
  var $getLess = function get (url, callback) {
    var done = complete(callback);
    if (_getLess[url] != null) return done(null, _getLess[url].cloneNode(true));
    $http.get(url)
         .success(function(o){
           toStylesheet(o, function(e, r){
             if (e) return done(e);
             r.setAttribute('origin', url);
             _getLess[url] = r;
             return done(null, r.cloneNode(true));
           });
         })
         .error(function(o, s){
           return done('HTTP(s) error ' + s);
         })
    ;
  };

  return {
    scope : { ngModel:'='},
    restrict: 'E',
    compile: function ($element, $attr) {
      var s = clearHREF($attr.href);
      if(s.match(/\.less$/i) || (s && $attr.rel && $attr.rel.toLowerCase() == 'stylesheet/less')) {
        return function ($scope, $element, $attr) {
          $getLess($attr.href, function(e, r){
            if (e) return console[typeof console.error == 'function'?'error':'log'](e);
            $element.replaceWith(r);
          });
        }
      }
    }
  };
});