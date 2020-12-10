# webpack-scope-hoisting

`Scope-Hoisting` 是作用域提升的意思，它的作用是，可以预编译各个模块，把打散的模块合并到一个函数中去。过去 webpack 打包时是将 bundle 中的各个模块单独打包，这样显然运行速度更慢一些

**举个例子：**

现在有一个 `util.js` 有一个 `index.js`, 我们在 `index.js` 里面引入 `util.js`(详见 src 文件夹)

打包之后:

```
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);console.log("Hello, Cindy")}]);
```

注意：这两个文件是分开打包的

**现在使用 `Scope Hoisting`**

`Scope Hoisting` 是 webpack 的内置功能，只需要配置下即可

```
const webpack = require('webpack');

module.exports = {
  plugins: [
    // 开启 Scope Hoisting
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
};
```

打包之后:

```
(()=>{"use strict";console.log("Hello, Cindy")})();
```


