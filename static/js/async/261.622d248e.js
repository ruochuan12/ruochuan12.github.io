"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([["261"],{50655:function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if(null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!t[Symbol.hasInstance](e):!(e instanceof t))throw TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=function(){function e(t){o(this,e),this.name=t}return u(e,[{key:"sayName",value:function(){return console.log("my name is "+this.name),this.name}}],[{key:"sayHello",value:function(){console.log("hello")}}]),e}(),l=function(r){function i(n,r){var u,l;return o(this,i),(u=(l=t(i).call(this,n))&&("object"===e(l)||"function"==typeof l)?l:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)).age=r,u}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(i,r),u(i,[{key:"sayAge",value:function(){return console.log("my age is "+this.age),this.age}}]),i}(i),a=new i("Parent"),c=new l("Child",18);console.log("parent: ",a),i.sayHello(),a.sayName(),console.log("child: ",c),l.sayHello(),c.sayName(),c.sayAge()}}]);