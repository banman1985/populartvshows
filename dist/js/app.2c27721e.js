(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{theTitle:"Popular TV Shows"}}),r("div",{staticClass:"card-deck row mx-auto"},t._l(t.tvList,(function(t){return r("Card",{key:t.name,attrs:{cards:t}})})),1)],1)},o=[],i=(r("a434"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("h1",[t._v(t._s(t.theTitle))])])}),c=[],s={name:"Header",props:["theTitle"]},u=s,l=(r("d058"),r("2877")),p=Object(l["a"])(u,i,c,!1,null,"37512b58",null),d=p.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("img",{staticClass:"card-img-top",attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.cards.poster_path,alt:"Card image cap"}}),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v(t._s(t.cards.name))]),r("p",{staticClass:"card-text"},[t._v(t._s(t.cards.overview))])])])},v=[],h={name:"Card",props:["cards"]},b=h,m=(r("feed"),Object(l["a"])(b,f,v,!1,null,"7660f970",null)),g=m.exports,y=r("bc3a"),_=r.n(y),w={name:"App",components:{Header:d,Card:g},data:function(){return{tvList:[]}},mounted:function(){var t=this;_.a.get("https://api.themoviedb.org/3/tv/popular?api_key=e72d704efa7872abba1106f277234689&language=en-US&page=1").then((function(e){t.tvList=e.data.results,t.tvList=t.tvList.splice(0,4)}))}},O=w,j=(r("034f"),Object(l["a"])(O,a,o,!1,null,null,null)),x=j.exports;r("4989"),r("ab8b");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"5aa7":function(t,e,r){},"85ec":function(t,e,r){},aa15:function(t,e,r){},d058:function(t,e,r){"use strict";r("5aa7")},feed:function(t,e,r){"use strict";r("aa15")}});
//# sourceMappingURL=app.2c27721e.js.map