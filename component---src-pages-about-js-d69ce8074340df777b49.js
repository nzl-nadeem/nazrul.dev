(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"14Xm":function(e,t,r){e.exports=r("cSMa")},"3BOr":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"],["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"]),a=l(["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"],["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"]),o=s(r("q1tI")),u=s(r("17x9")),i=r("fMHQ"),c=s(i);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=(0,i.keyframes)(n),p=c.default.span(a,f),d=function(e){var t=e.className;return o.default.createElement(p,{className:t},"|")};d.propTypes={className:u.default.string},d.defaultProps={className:""},t.default=d},"3RSX":function(e,t,r){"use strict";var n=r("Qfp6");e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},"3XHS":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("vrFN"),u=r("Bl7J"),i=r("tBDR"),c=r("j/HY"),s=r.n(c);t.default=function(e){e.data;return a.a.createElement(u.a,null,a.a.createElement(o.a,{title:"About"}),a.a.createElement("section",{className:"about",id:"top"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row mt-4 justify-content-center"},a.a.createElement("div",{className:"col-lg-6 col-sm-12 my-auto headline"},a.a.createElement("h1",null,"Things I LOVE"),a.a.createElement(s.a,{loop:!0,cursorClassName:"cursor"},a.a.createElement("h2",null,"Optimizing stuff - websites / apps",a.a.createElement(s.a.Backspace,{count:20,delay:1e3}),a.a.createElement(s.a.Delay,{ms:200}),"Deleting old code.",a.a.createElement(s.a.Backspace,{count:20,delay:1e3}),a.a.createElement(s.a.Delay,{ms:200}),"Braking stuff.",a.a.createElement(s.a.Backspace,{count:20,delay:1e3}),a.a.createElement(s.a.Delay,{ms:200}),a.a.createElement(s.a.Cursor,null))))),a.a.createElement("div",{className:"row my-4 justify-content-center"},a.a.createElement("div",{className:"col-lg-7 my-auto"},a.a.createElement("div",{className:"card shadow-sm"},a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"card-title"},a.a.createElement("h3",null,"Hi"," ",a.a.createElement("span",{role:"img","aria-label":"Happy face"},"😊"))),a.a.createElement("div",{className:"card-text"},"I’m a self-employed web designer, developer, geek and open-source enthusiast. I love building things that make developers more productive and happier.",a.a.createElement("br",null),"Still a university student fighting for my bachelor’s degree in Computer Engineering, helping colleagues and teachers on my way.",a.a.createElement("br",null),"My past gig was at Mi9Retail where I worked on E-commerce websites and blogs used by millions of users.",a.a.createElement("br",null),"On this page, you will find the projects I’ve worked on, as well as some of my GitHub repositories, blog posts, and some of the talks I’ve given over the years."))))),a.a.createElement("div",{className:"col-lg-6 my-auto mx-auto"},a.a.createElement(i.a,{fileName:"mini_profile.png",alt:"Profile Picture",className:"about-img-wrapper"})))))}},"5R+2":function(e,t){e.exports=function(e,t,r){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*n*r/t.length),o="";;)for(var u=e(a),i=a;i--;)if((o+=t[u[i]&n]||"").length===+r)return o}},Bpvx:function(e,t,r){"use strict";var n=r("Qfp6"),a=r("Pfkr"),o=r("3RSX"),u=r("n8Jw")||0;function i(){return a(u)}e.exports=i,e.exports.generate=i,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return u=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=o},CR0S:function(e,t,r){"use strict";var n,a="object"==typeof window&&(window.crypto||window.msCrypto);n=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],r=0;r<e;r++)t.push(Math.floor(256*Math.random()));return t},e.exports=n},G8ry:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("q1tI"),o=(n=a)&&n.__esModule?n:{default:n};var u=function(){return o.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.count,n=t.delay,a=t.speed;return Object.assign({},e,{numToErase:r,preEraseLineNum:e.lineNum,speed:a>0?a:e.speed,delay:n>0?e.delay+n:e.delay,step:"line"})},u.getName=function(){return"Reset"},t.default=u},LJc4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("q1tI"),o=(n=a)&&n.__esModule?n:{default:n};var u=function(){return o.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.ms;return Object.assign({},e,{speed:r})},u.getName=function(){return"Speed"},t.default=u},Pfkr:function(e,t,r){"use strict";var n,a,o=r("vZIR");r("Qfp6");e.exports=function(e){var t="",r=Math.floor(.001*(Date.now()-1567752802062));return r===a?n++:(n=0,a=r),t+=o(7),t+=o(e),n>0&&(t+=o(n)),t+=o(r)}},Qfp6:function(e,t,r){"use strict";var n,a,o,u=r("fqyn"),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function s(e){if(e){if(e!==n){if(e.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,r){return t!==r.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,c()}}else n!==i&&(n=i,c())}function l(){return o||(o=function(){n||s(i);for(var e,t=n.split(""),r=[],a=u.nextValue();t.length>0;)a=u.nextValue(),e=Math.floor(a*t.length),r.push(t.splice(e,1)[0]);return r.join("")}())}e.exports={get:function(){return n||i},characters:function(e){return s(e),n},seed:function(e){u.seed(e),a!==e&&(c(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},XVVG:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("q1tI"),o=(n=a)&&n.__esModule?n:{default:n};var u=function(){return o.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.ms;return Object.assign({},e,{delay:e.delay+r})},u.getName=function(){return"Delay"},t.default=u},cSMa:function(e,t,r){var n=function(){return this}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r("u4eC"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(u){n.regeneratorRuntime=void 0}},fqyn:function(e,t,r){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},"j/HY":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Speed=t.Reset=t.Delay=t.Cursor=t.Backspace=void 0;var n=r("plls");Object.defineProperty(t,"Backspace",{enumerable:!0,get:function(){return s(n).default}});var a=r("3BOr");Object.defineProperty(t,"Cursor",{enumerable:!0,get:function(){return s(a).default}});var o=r("XVVG");Object.defineProperty(t,"Delay",{enumerable:!0,get:function(){return s(o).default}});var u=r("G8ry");Object.defineProperty(t,"Reset",{enumerable:!0,get:function(){return s(u).default}});var i=r("LJc4");Object.defineProperty(t,"Speed",{enumerable:!0,get:function(){return s(i).default}});var c=s(r("xVvY"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=c.default},je4i:function(e,t,r){"use strict";e.exports=r("Bpvx")},n8Jw:function(e,t,r){"use strict";e.exports=0},orcf:function(e,t,r){"use strict";r("E9XD"),Object.defineProperty(t,"__esModule",{value:!0}),t.getCircularReplacer=t.replaceTreeText=t.extractText=t.randomize=t.gaussianRandomInRange=t.randomInRange=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=r("q1tI"),o=i(a),u=i(r("je4i"));function i(e){return e&&e.__esModule?e:{default:e}}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],s=function e(t){return t.reduce((function(t,r){return t.concat(Array.isArray(r)?a.Children.toArray(e(r)):a.Children.toArray(r))}),[])},l=function(e){return e.filter((function(e){return void 0!==e}))},f=function(e){return["Backspace","Delay","Speed","Reset"].some((function(t){return e.type&&e.type.getName&&e.type.getName()===t}))},p=t.randomInRange=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},d=t.gaussianRandomInRange=function(e,t){for(var r=p(e,t),n=0;n<5;n++)r+=p(e,t);return Math.floor(r/6)};t.randomize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return d(e+e*t,e-e*t)},t.extractText=function(){var e=function e(t){return f(t)?t:o.default.isValidElement(t)?-1!==c.indexOf(t.type)?"\n":a.Children.map(t.props.children,(function(t){return e(t)})):Array.isArray(t)?t.map((function(t){return e(t)})):String(t)},t=e.apply(void 0,arguments);return Array.isArray(t)?l(s(t)):l([t])},t.replaceTreeText=function(e,t,r,n){return function e(t,i){if(!(i.length<1||f(t)))return o.default.isValidElement(t)?-1!==c.indexOf(t.type)?1===i.length?a.Children.toArray([""===i.shift()?void 0:t,n?null:r]):""===i.shift()?void 0:t:o.default.createElement(t.type,Object.assign({},t.props,{key:t.key||"Typing."+u.default.generate()}),l(a.Children.toArray(t.props.children).map((function(t){return e(t,i)})))):Array.isArray(t)?l(t.map((function(t){return e(t,i)}))):1===i.length?a.Children.toArray([i.shift(),n?null:r]):i.shift()||""}(e,t.slice())},t.getCircularReplacer=function(){var e=new WeakSet;return function(t,r){if("object"===(void 0===r?"undefined":n(r))&&null!==r){if(e.has(r))return;try{e.add(r)}catch(a){}}return r}}},plls:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r("q1tI"),o=(n=a)&&n.__esModule?n:{default:n};var u=function(){return o.default.createElement("noscript",null)};u.updateCursor=function(e,t){var r=t.speed,n=t.count,a=t.delay;return Object.assign({},e,{numToErase:n,preEraseLineNum:e.lineNum,speed:r>0?r:e.speed,delay:a>0?e.delay+a:e.delay})},u.getName=function(){return"Backspace"},t.default=u},tBDR:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),u=r("9eSz"),i=r.n(u);t.a=function(e){var t=e.fileName,r=e.alt,n=e.className,u=Object(o.useStaticQuery)("2156507446").allImageSharp.nodes.find((function(e){return e.fluid.originalName===t})).fluid;return a.a.createElement("figure",null,a.a.createElement(i.a,{fluid:u,alt:r,className:n}))}},u4eC:function(e,t){!function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag",c="object"==typeof e,s=t.regeneratorRuntime;if(s)c&&(e.exports=s);else{(s=t.regeneratorRuntime=c?e.exports:{}).wrap=m;var l={},f={};f[o]=function(){return this};var p=Object.getPrototypeOf,d=p&&p(p(j([])));d&&d!==r&&n.call(d,o)&&(f=d);var h=b.prototype=v.prototype=Object.create(f);g.prototype=h.constructor=b,b.constructor=g,b[i]=g.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(h),e},s.awrap=function(e){return{__await:e}},x(w.prototype),w.prototype[u]=function(){return this},s.AsyncIterator=w,s.async=function(e,t,r,n){var a=new w(m(e,t,r,n));return s.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(h),h[i]="Generator",h[o]=function(){return this},h.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return u.type="throw",u.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}}}function m(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),u=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var u=r.delegate;if(u){var i=E(u,r);if(i){if(i===l)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=y(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,u),o}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function v(){}function g(){}function b(){}function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function w(e){var t;this._invoke=function(r,a){function o(){return new Promise((function(t,o){!function t(r,a,o,u){var i=y(e[r],e,a);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,o,u)}),(function(e){t("throw",e,o,u)})):Promise.resolve(s).then((function(e){c.value=e,o(c)}),u)}u(i.arg)}(r,a,t,o)}))}return t=t?t.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=y(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},vZIR:function(e,t,r){"use strict";var n=r("Qfp6"),a=r("CR0S"),o=r("5R+2");e.exports=function(e){for(var t,r=0,u="";!t;)u+=o(a,n.get(),1),t=e<Math.pow(16,r+1),r++;return u}},xVvY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(r("14Xm")),a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r("q1tI"),u=m(o),i=m(r("17x9")),c=m(r("xEkU")),s=r("orcf"),l=m(r("plls")),f=m(r("G8ry")),p=m(r("XVVG")),d=m(r("LJc4")),h=m(r("3BOr"));function m(e){return e&&e.__esModule?e:{default:e}}function y(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function v(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,r){return function n(a,o){try{var u=t[a](o),i=u.value}catch(c){return void r(c)}if(!u.done)return Promise.resolve(i).then((function(e){n("next",e)}),(function(e){n("throw",e)}));e(i)}("next")}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){function t(){var e,r,a,o,u=this;g(this,t);for(var i=arguments.length,c=Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=a=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={isFinished:!1,text:[]},a.updateState=(o=v(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.hasMounted){e.next=2;break}return e.abrupt("return",new Promise((function(e){a.setState(t,e)})));case 2:case"end":return e.stop()}}),e,u)}))),function(e){return o.apply(this,arguments)}),a.resetState=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.updateState({toType:(0,s.extractText)(a.props.children),cursor:{lineNum:0,charPos:0,numToErase:0,preEraseLineNum:0,delay:a.props.startDelay,speed:a.props.speed,step:"char"}}));case 1:case"end":return e.stop()}}),e,u)}))),a.beginTyping=v(n.default.mark((function e(){var t;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object.assign({},a.state.cursor),!(a.state.toType.length>0||t.numToErase>0)){e.next=10;break}return e.next=4,a.props.onBeforeType(a.state.text);case 4:return e.next=6,a.type();case 6:return e.next=8,a.props.onAfterType(a.state.text);case 8:e.next=18;break;case 10:return e.next=12,a.props.onFinishedTyping();case 12:if(!a.props.loop){e.next=17;break}return e.next=15,a.resetState();case 15:e.next=18;break;case 17:return e.abrupt("return",a.updateState({isFinished:!0}));case 18:if(!a.hasMounted){e.next=20;break}return e.abrupt("return",a.beginTyping());case 20:case"end":return e.stop()}}),e,u)}))),a.type=v(n.default.mark((function e(){var t,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[].concat(y(a.state.toType)),r=Object.assign({},a.state.cursor);t&&t[0]&&t[0].type&&t[0].type.updateCursor&&r.numToErase<1;)r=t[0].type.updateCursor(r,t[0].props),t.shift();return e.next=5,a.updateState({cursor:r,toType:t});case 5:return e.abrupt("return",a.animateNextStep());case 6:case"end":return e.stop()}}),e,u)}))),a.animateNextStep=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(v(n.default.mark((function t(){var r,o,i;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.state,o=r.cursor,i=r.toType,t.next=3,a.updateState({cursor:Object.assign({},o,{delay:0})});case 3:if(!("char"===o.step&&o.numToErase<1)){t.next=9;break}if(!(i.length>0)){t.next=7;break}return t.next=7,a.typeCharacter();case 7:t.next=11;break;case 9:return t.next=11,a.erase();case 11:e();case 12:case"end":return t.stop()}}),t,u)}))),a.state.cursor.delay)})));case 1:case"end":return e.stop()}}),e,u)}))),a.typeCharacter=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=v(n.default.mark((function e(t){var r,o,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[].concat(y(a.state.toType)),o=[].concat(y(a.state.text)),i=Object.assign({},a.state.cursor),o.length-1<i.lineNum&&(o[i.lineNum]=""),o[i.lineNum]+=r[0][i.charPos],i.charPos+=1,r[0].length-1<i.charPos&&(i.lineNum+=1,i.charPos=0,r.shift()),e.next=9,a.updateState({cursor:i,text:o,toType:r});case 9:setTimeout(t,(0,s.randomize)(i.speed));case 10:case"end":return e.stop()}}),e,u)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,u)}))),a.erase=v(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=v(n.default.mark((function e(t){var r,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[].concat(y(a.state.text)),o=Object.assign({},a.state.cursor);case 2:if(!(o.lineNum>r.length-1||o.charPos<0)){e.next=9;break}if(o.lineNum-=1,!(o.lineNum<0)){e.next=6;break}return e.abrupt("break",9);case 6:o.charPos=r[o.lineNum].length?r[o.lineNum].length-1:0,e.next=2;break;case 9:return"char"===o.step&&o.lineNum>=0?r[o.lineNum]=r[o.lineNum].substr(0,r[o.lineNum].length-1):o.numToErase>0?r[o.lineNum]="":r.length=0,o.charPos-=1,o.numToErase-=1,o.numToErase<1&&(o.lineNum=o.preEraseLineNum,o.charPos=0,o.step="char"),e.next=15,a.updateState({cursor:o,text:r});case 15:setTimeout(t,(0,s.randomize)(o.speed));case 16:case"end":return e.stop()}}),e,u)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,u)}))),b(a,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.children;void 0!==t&&JSON.stringify(t,(0,s.getCircularReplacer)())!==JSON.stringify(e.children,(0,s.getCircularReplacer)())&&this.resetState()}},{key:"componentDidMount",value:function(){var e=this;this.hasMounted=!0,this.resetState().then(v(n.default.mark((function t(){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.onStartedTyping();case 2:(0,c.default)(e.beginTyping);case 3:case"end":return t.stop()}}),t,e)}))))}},{key:"componentWillUnmount",value:function(){this.hasMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.cursorClassName,a=e.hideCursor,o=this.state,i=o.isFinished,c=o.text,l=this.props.cursor||u.default.createElement(h.default,{className:n}),f=(0,s.replaceTreeText)(t,c,l,i||a);return u.default.createElement("div",{className:r},f)}}]),t}(o.Component);x.propTypes={children:i.default.node.isRequired,className:i.default.string,cursor:i.default.node,cursorClassName:i.default.string,speed:i.default.number,startDelay:i.default.number,loop:i.default.bool,onStartedTyping:i.default.func,onBeforeType:i.default.func,onAfterType:i.default.func,onFinishedTyping:i.default.func},x.defaultProps={className:"",cursorClassName:"",speed:50,startDelay:0,loop:!1,onStartedTyping:function(){},onBeforeType:function(){},onAfterType:function(){},onFinishedTyping:function(){}},x.Backspace=l.default,x.Reset=f.default,x.Delay=p.default,x.Speed=d.default,x.Cursor=h.default,t.default=x}}]);
//# sourceMappingURL=component---src-pages-about-js-d69ce8074340df777b49.js.map