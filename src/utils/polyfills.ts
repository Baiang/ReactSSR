/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
/*import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
import 'core-js/es6/map';
import 'core-js/es6/set';*/

import "babel-polyfill";
import 'object-create-ie8';//IE8, 我写的库，这样就不用加上es5-sham
import 'object-defineproperty-ie8';//IE8， 我写的库
import 'console-polyfill';//IE8下，如果你不打开开发者工具，window下是没有console这个对象的，

import 'json3';  //比IE8的JSON好用
// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
console.log('Load your polyfills')

/*String.prototype.includes = includes
String.prototype.repeat = repeat*/
