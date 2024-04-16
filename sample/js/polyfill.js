/*
 * Polyfill service v3.111.0
 * Disable minification (remove `.min` from URL path) for more info
*/

(function(self, undefined) {!function(e){"use strict";function t(t){return!!t&&("Symbol"in e&&"iterator"in e.Symbol&&"function"==typeof t[Symbol.iterator]||!!Array.isArray(t))}!function(){function n(e){var t="",n=!0;return e.forEach(function(e){var r=encodeURIComponent(e.name),a=encodeURIComponent(e.value);n||(t+="&"),t+=r+"="+a,n=!1}),t.replace(/%20/g,"+")}function r(e){return e.replace(/((%[0-9A-Fa-f]{2})*)/g,function(e,t){return decodeURIComponent(t)})}function a(e,t){var n=e.split("&");t&&-1===n[0].indexOf("=")&&(n[0]="="+n[0]);var a=[];n.forEach(function(e){if(0!==e.length){var t=e.indexOf("=");if(-1!==t)var n=e.substring(0,t),r=e.substring(t+1);else n=e,r="";n=n.replace(/\+/g," "),r=r.replace(/\+/g," "),a.push({name:n,value:r})}});var i=[];return a.forEach(function(e){i.push({name:r(e.name),value:r(e.value)})}),i}function i(e){if(c)return new s(e);var t=document.createElement("a");return t.href=e,t}function o(e){var r=this;this._list=[],e===undefined||null===e||(e instanceof o?this._list=a(String(e)):"object"==typeof e&&t(e)?Array.from(e).forEach(function(e){if(!t(e))throw TypeError();var n=Array.from(e);if(2!==n.length)throw TypeError();r._list.push({name:String(n[0]),value:String(n[1])})}):"object"==typeof e&&e?Object.keys(e).forEach(function(t){r._list.push({name:String(t),value:String(e[t])})}):(e=String(e),"?"===e.substring(0,1)&&(e=e.substring(1)),this._list=a(e))),this._url_object=null,this._setList=function(e){i||(r._list=e)};var i=!1;this._update_steps=function(){i||(i=!0,r._url_object&&("about:"===r._url_object.protocol&&-1!==r._url_object.pathname.indexOf("?")&&(r._url_object.pathname=r._url_object.pathname.split("?")[0]),r._url_object.search=n(r._list),i=!1))}}function u(e,t){var n=0;this.next=function(){if(n>=e.length)return{done:!0,value:undefined};var r=e[n++];return{done:!1,value:"key"===t?r.name:"value"===t?r.value:[r.name,r.value]}}}function l(t,n){function r(){var e=l.href.replace(/#$|\?$|\?(?=#)/g,"");l.href!==e&&(l.href=e)}function u(){m._setList(l.search?a(l.search.substring(1)):[]),m._update_steps()}if(!(this instanceof e.URL))throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");n&&(t=function(){if(c)return new s(t,n).href;var e;try{var r;if("[object OperaMini]"===Object.prototype.toString.call(window.operamini)?(e=document.createElement("iframe"),e.style.display="none",document.documentElement.appendChild(e),r=e.contentWindow.document):document.implementation&&document.implementation.createHTMLDocument?r=document.implementation.createHTMLDocument(""):document.implementation&&document.implementation.createDocument?(r=document.implementation.createDocument("http://www.w3.org/1999/xhtml","html",null),r.documentElement.appendChild(r.createElement("head")),r.documentElement.appendChild(r.createElement("body"))):window.ActiveXObject&&(r=new window.ActiveXObject("htmlfile"),r.write("<head></head><body></body>"),r.close()),!r)throw Error("base not supported");var a=r.createElement("base");a.href=n,r.getElementsByTagName("head")[0].appendChild(a);var i=r.createElement("a");return i.href=t,i.href}finally{e&&e.parentNode.removeChild(e)}}());var l=i(t||""),f=function(){if(!("defineProperties"in Object))return!1;try{var e={};return Object.defineProperties(e,{prop:{get:function(){return!0}}}),e.prop}catch(t){return!1}}(),h=f?this:document.createElement("a"),m=new o(l.search?l.search.substring(1):null);return m._url_object=h,Object.defineProperties(h,{href:{get:function(){return l.href},set:function(e){l.href=e,r(),u()},enumerable:!0,configurable:!0},origin:{get:function(){return"data:"===this.protocol.toLowerCase()?null:"origin"in l?l.origin:this.protocol+"//"+this.host},enumerable:!0,configurable:!0},protocol:{get:function(){return l.protocol},set:function(e){l.protocol=e},enumerable:!0,configurable:!0},username:{get:function(){return l.username},set:function(e){l.username=e},enumerable:!0,configurable:!0},password:{get:function(){return l.password},set:function(e){l.password=e},enumerable:!0,configurable:!0},host:{get:function(){var e={"http:":/:80$/,"https:":/:443$/,"ftp:":/:21$/}[l.protocol];return e?l.host.replace(e,""):l.host},set:function(e){l.host=e},enumerable:!0,configurable:!0},hostname:{get:function(){return l.hostname},set:function(e){l.hostname=e},enumerable:!0,configurable:!0},port:{get:function(){return l.port},set:function(e){l.port=e},enumerable:!0,configurable:!0},pathname:{get:function(){return"/"!==l.pathname.charAt(0)?"/"+l.pathname:l.pathname},set:function(e){l.pathname=e},enumerable:!0,configurable:!0},search:{get:function(){return l.search},set:function(e){l.search!==e&&(l.search=e,r(),u())},enumerable:!0,configurable:!0},searchParams:{get:function(){return m},enumerable:!0,configurable:!0},hash:{get:function(){return l.hash},set:function(e){l.hash=e,r()},enumerable:!0,configurable:!0},toString:{value:function(){return l.toString()},enumerable:!1,configurable:!0},valueOf:{value:function(){return l.valueOf()},enumerable:!1,configurable:!0}}),h}var c,s=e.URL;try{if(s){if("searchParams"in(c=new e.URL("http://example.com"))){var f=new l("http://example.com");if(f.search="a=1&b=2","http://example.com/?a=1&b=2"===f.href&&(f.search="","http://example.com/"===f.href))return}"href"in c||(c=undefined),c=undefined}}catch(m){}if(Object.defineProperties(o.prototype,{append:{value:function(e,t){this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},"delete":{value:function(e){for(var t=0;t<this._list.length;)this._list[t].name===e?this._list.splice(t,1):++t;this._update_steps()},writable:!0,enumerable:!0,configurable:!0},get:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return this._list[t].value;return null},writable:!0,enumerable:!0,configurable:!0},getAll:{value:function(e){for(var t=[],n=0;n<this._list.length;++n)this._list[n].name===e&&t.push(this._list[n].value);return t},writable:!0,enumerable:!0,configurable:!0},has:{value:function(e){for(var t=0;t<this._list.length;++t)if(this._list[t].name===e)return!0;return!1},writable:!0,enumerable:!0,configurable:!0},set:{value:function(e,t){for(var n=!1,r=0;r<this._list.length;)this._list[r].name===e?n?this._list.splice(r,1):(this._list[r].value=t,n=!0,++r):++r;n||this._list.push({name:e,value:t}),this._update_steps()},writable:!0,enumerable:!0,configurable:!0},entries:{value:function(){return new u(this._list,"key+value")},writable:!0,enumerable:!0,configurable:!0},keys:{value:function(){return new u(this._list,"key")},writable:!0,enumerable:!0,configurable:!0},values:{value:function(){return new u(this._list,"value")},writable:!0,enumerable:!0,configurable:!0},forEach:{value:function(e){var t=arguments.length>1?arguments[1]:undefined;this._list.forEach(function(n){e.call(t,n.value,n.name)})},writable:!0,enumerable:!0,configurable:!0},toString:{value:function(){return n(this._list)},writable:!0,enumerable:!1,configurable:!0},sort:{value:function p(){for(var e=this.entries(),t=e.next(),n=[],r={};!t.done;){var a=t.value,i=a[0];n.push(i),Object.prototype.hasOwnProperty.call(r,i)||(r[i]=[]),r[i].push(a[1]),t=e.next()}n.sort();for(var o=0;o<n.length;o++)this["delete"](n[o]);for(var u=0;u<n.length;u++)i=n[u],this.append(i,r[i].shift())}}}),"Symbol"in e&&"iterator"in e.Symbol&&(Object.defineProperty(o.prototype,e.Symbol.iterator,{value:o.prototype.entries,writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(u.prototype,e.Symbol.iterator,{value:function(){return this},writable:!0,enumerable:!0,configurable:!0})),s)for(var h in s)Object.prototype.hasOwnProperty.call(s,h)&&"function"==typeof s[h]&&(l[h]=s[h]);e.URL=l,e.URLSearchParams=o}(),function(){if("1"!==new e.URLSearchParams([["a",1]]).get("a")||"1"!==new e.URLSearchParams({a:1}).get("a")){var n=e.URLSearchParams;e.URLSearchParams=function(e){if(e&&"object"==typeof e&&t(e)){var r=new n;return Array.from(e).forEach(function(e){if(!t(e))throw TypeError();var n=Array.from(e);if(2!==n.length)throw TypeError();r.append(n[0],n[1])}),r}return e&&"object"==typeof e?(r=new n,Object.keys(e).forEach(function(t){r.set(t,e[t])}),r):new n(e)}}}()}(self);!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.WHATWGFetch={})}(this,function(t){"use strict";function e(t){return t&&DataView.prototype.isPrototypeOf(t)}function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function o(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:e===undefined,value:e}}};return E.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function f(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function h(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:E.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:E.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:E.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():E.arrayBuffer&&E.blob&&e(t)?(this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):E.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||A(t))?this._bodyArrayBuffer=c(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):E.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},E.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=s(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(f)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},E.formData&&(this.formData=function(){return this.text().then(l)}),this.json=function(){return this.text().then(JSON.parse)},this}function y(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function p(t,e){if(!(this instanceof p))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=y(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{var n=/\?/;this.url+=(n.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function l(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}}),e}function b(t){var e=new i;return t.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t}).forEach(function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}}),e}function m(t,e){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=e.status===undefined?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=e.statusText===undefined?"":""+e.statusText,this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}function w(e,r){return new Promise(function(n,s){function a(){u.abort()}var f=new p(e,r);if(f.signal&&f.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var u=new XMLHttpRequest;u.onload=function(){var t={status:u.status,statusText:u.statusText,headers:b(u.getAllResponseHeaders()||"")};t.url="responseURL"in u?u.responseURL:t.headers.get("X-Request-URL");var e="response"in u?u.response:u.responseText;setTimeout(function(){n(new m(e,t))},0)},u.onerror=function(){setTimeout(function(){s(new TypeError("Network request failed"))},0)},u.ontimeout=function(){setTimeout(function(){s(new TypeError("Network request failed"))},0)},u.onabort=function(){setTimeout(function(){s(new t.DOMException("Aborted","AbortError"))},0)},u.open(f.method,function h(t){try{return""===t&&v.location.href?v.location.href:t}catch(e){return t}}(f.url),!0),"include"===f.credentials?u.withCredentials=!0:"omit"===f.credentials&&(u.withCredentials=!1),"responseType"in u&&(E.blob?u.responseType="blob":E.arrayBuffer&&f.headers.get("Content-Type")&&-1!==f.headers.get("Content-Type").indexOf("application/octet-stream")&&(u.responseType="arraybuffer")),!r||"object"!=typeof r.headers||r.headers instanceof i?f.headers.forEach(function(t,e){u.setRequestHeader(e,t)}):Object.getOwnPropertyNames(r.headers).forEach(function(t){u.setRequestHeader(t,o(r.headers[t]))}),f.signal&&(f.signal.addEventListener("abort",a),u.onreadystatechange=function(){4===u.readyState&&f.signal.removeEventListener("abort",a)}),u.send("undefined"==typeof f._bodyInit?null:f._bodyInit)})}var v="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==v&&v,E={searchParams:"URLSearchParams"in v,iterable:"Symbol"in v&&"iterator"in Symbol,blob:"FileReader"in v&&"Blob"in v&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in v,arrayBuffer:"ArrayBuffer"in v};if(E.arrayBuffer)var T=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],A=ArrayBuffer.isView||function(t){return t&&T.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=o(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},i.prototype["delete"]=function(t){delete this.map[r(t)]},i.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=o(e)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},E.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},d.call(p.prototype),d.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var g=[301,302,303,307,308];m.redirect=function(t,e){if(-1===g.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.DOMException=v.DOMException;try{new t.DOMException}catch(B){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}w.polyfill=!0,v.fetch=w,v.Headers=i,v.Request=p,v.Response=m,t.Headers=i,t.Request=p,t.Response=m,t.fetch=w,Object.defineProperty(t,"__esModule",{value:!0})});})('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});