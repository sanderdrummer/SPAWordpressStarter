!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,exports,e){"use strict";function i(t){console.log(t),p.resetActive(),c.resetActive(),t.active=!0}e(9);var n=e(13),o=e(15),r=e(27),a=e(31),s=e(32),l=e(33),c=new o,p=new r,u=new a(s),h=new n;new l;window.location.hash||(window.location.hash="#/"),h.register("/",function(t){i(u),u.getHome()}).register("/posts",function(t){t.category="all";var e=c.getpostList(t);i(e),e.getPosts(t)}).register("/posts/:category",function(t){var e=c.getpostList(t);i(e),e.getPosts(t)}).register("/post/:category/:id",function(t){var e=c.getpostList(t);e.getSinglePost(t)}).register("/page/:id",function(t){var e=p.getPageView(t);i(e),e.getPage(t)})},,,,,,,,,function(t,exports,e){var i=e(10);"string"==typeof i&&(i=[[t.id,i,""]]);e(12)(i,{});i.locals&&(t.exports=i.locals)},function(t,exports,e){exports=t.exports=e(11)(),exports.push([t.id,"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}body ::selection{background:#a3c9ed}.serif{color:#aaa}.fancyMe,.serif{font-family:Poiret One,serif}code{vertical-align:bottom}.hug{margin-top:0}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.bold{font-weight:700}a,a.ttd{cursor:pointer;color:#a3c9ed;text-decoration:none}a.ttd:hover,a:hover{color:#4e97dc}.highlight{color:#a3c9ed}.capitalize{text-transform:capitalize}@media only screen and (min-width:10px){html{font-family:Open Sans,sans-serif;font-size:75%;-webkit-font-smoothing:antialiased;color:#333}p{line-height:1.5rem;margin-bottom:0}ol,p,ul{margin-top:1.5rem}ol,ul{padding-left:0;margin-bottom:1.5rem}ol li,ul li{list-style-type:none;line-height:1.5rem}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}blockquote{margin-bottom:1.5rem}blockquote,h1,h2,h3,h4,h5,h6{line-height:1.5rem;margin-top:1.5rem}h1,h2,h3,h4,h5,h6{font-family:Poiret One,serif;font-weight:300;margin-bottom:0}h1{font-size:4.242rem;line-height:4.5rem}h1,h2{margin-top:3rem}h2{font-size:2.828rem;line-height:3rem}h3{font-size:1.414rem}h4{font-size:.707rem}h5{font-size:.47133333rem}h6{font-size:.3535rem}.center-line{display:table}.center-line h1,.center-line h2,.center-line h3{text-align:center;display:table-cell;white-space:pre;padding:0 .75rem;color:#a3c9ed}.center-line span{display:table-cell;height:1px;position:relative;vertical-align:middle;width:50%}.center-line span:after{content:'';height:1px;border-top:2px solid #a3c9ed;display:block;position:relative;top:1px;width:100%}.lead{font-size:1.414rem;color:#aaa;font-family:Open Sans,sans-serif}}@media only screen and (min-width:768px){html{font-family:Open Sans,sans-serif;font-size:87.5%;-webkit-font-smoothing:antialiased;color:#333}p{line-height:1.5rem;margin-bottom:0}ol,p,ul{margin-top:1.5rem}ol,ul{padding-left:0;margin-bottom:1.5rem}ol li,ul li{list-style-type:none;line-height:1.5rem}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}blockquote{margin-bottom:1.5rem}blockquote,h1,h2,h3,h4,h5,h6{line-height:1.5rem;margin-top:1.5rem}h1,h2,h3,h4,h5,h6{font-family:Poiret One,serif;font-weight:300;margin-bottom:0}h1{font-size:4.242rem;line-height:4.5rem}h1,h2{margin-top:3rem}h2{font-size:2.828rem;line-height:3rem}h3{font-size:1.414rem}h4{font-size:.707rem}h5{font-size:.47133333rem}h6{font-size:.3535rem}.center-line{display:table}.center-line h1,.center-line h2,.center-line h3{text-align:center;display:table-cell;white-space:pre;padding:0 .75rem;color:#a3c9ed}.center-line span{display:table-cell;height:1px;position:relative;vertical-align:middle;width:50%}.center-line span:after{content:'';height:1px;border-top:2px solid #a3c9ed;display:block;position:relative;top:1px;width:100%}.lead{font-size:1.414rem;color:#aaa;font-family:Open Sans,sans-serif}}@media only screen and (min-width:1224px){html{font-family:Open Sans,sans-serif;font-size:125%;-webkit-font-smoothing:antialiased;color:#333}p{line-height:1.5rem;margin-bottom:0}ol,p,ul{margin-top:1.5rem}ol,ul{padding-left:0;margin-bottom:1.5rem}ol li,ul li{list-style-type:none;line-height:1.5rem}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}blockquote{margin-bottom:1.5rem}blockquote,h1,h2,h3,h4,h5,h6{line-height:1.5rem;margin-top:1.5rem}h1,h2,h3,h4,h5,h6{font-family:Poiret One,serif;font-weight:300;margin-bottom:0}h1{font-size:4.242rem;line-height:4.5rem}h1,h2{margin-top:3rem}h2{font-size:2.828rem;line-height:3rem}h3{font-size:1.414rem}h4{font-size:.707rem}h5{font-size:.47133333rem}h6{font-size:.3535rem}.center-line{display:table}.center-line h1,.center-line h2,.center-line h3{text-align:center;display:table-cell;white-space:pre;padding:0 .75rem;color:#a3c9ed}.center-line span{display:table-cell;height:1px;position:relative;vertical-align:middle;width:50%}.center-line span:after{content:'';height:1px;border-top:2px solid #a3c9ed;display:block;position:relative;top:1px;width:100%}.lead{font-size:1.414rem;color:#aaa;font-family:Open Sans,sans-serif}}*{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}img{max-width:100%}img.stretch{width:100%}.container{max-width:1300px;min-width:1000px;padding:0 1.5rem;margin:0 auto}[class^=col-]{position:relative;min-height:1px;padding-left:1.5rem;padding-right:1.5rem;float:left}.col-12{width:100%}.off-12{margin-left:100%}.col-11{width:91.66666667%}.off-11{margin-left:91.66666667%}.col-10{width:83.33333333%}.off-10{margin-left:83.33333333%}.col-9{width:75%}.off-9{margin-left:75%}.col-8{width:66.66666667%}.off-8{margin-left:66.66666667%}.col-7{width:58.33333333%}.off-7{margin-left:58.33333333%}.col-6{width:50%}.off-6{margin-left:50%}.col-5{width:41.66666667%}.off-5{margin-left:41.66666667%}.col-4{width:33.33333333%}.off-4{margin-left:33.33333333%}.col-3{width:25%}.off-3{margin-left:25%}.col-2{width:16.66666667%}.off-2{margin-left:16.66666667%}.col-1{width:8.33333333%}.off-1{margin-left:8.33333333%}.grid{margin-left:-1.5rem;margin-right:-1.5rem;margin-top:1.5rem}.grid:after,.grid:before{content:\" \";display:table}.grid:after{clear:both}.m-t-5{margin-top:7.5rem}.m-r-5{margin-right:7.5rem}.m-b-5{margin-bottom:7.5rem}.m-l-5{margin-left:7.5rem}.m-t-4{margin-top:6rem}.m-r-4{margin-right:6rem}.m-b-4{margin-bottom:6rem}.m-l-4{margin-left:6rem}.m-t-3{margin-top:4.5rem}.m-r-3{margin-right:4.5rem}.m-b-3{margin-bottom:4.5rem}.m-l-3{margin-left:4.5rem}.m-t-2{margin-top:3rem}.m-r-2{margin-right:3rem}.m-b-2{margin-bottom:3rem}.m-l-2{margin-left:3rem}.m-t-1{margin-top:1.5rem}.m-r-1{margin-right:1.5rem}.m-b-1{margin-bottom:1.5rem}.m-l-1{margin-left:1.5rem}@media only screen and (max-width:1040px){.grid{margin-left:0;margin-right:0}[class^=col-]{width:90%;padding-left:0;padding-right:0}.container{width:100%;max-width:100%;min-width:100%;margin-left:0;margin-right:0;padding:0}.box{width:100%}}button,input[type=date],input[type=email],input[type=password],input[type=submit],input[type=text],input[type=time],label,select,textarea{padding:.75rem;margin-top:1.5rem;box-sizing:border-box;box-shadow:none;border:1px solid grey}button:active,button:focus,input[type=date]:active,input[type=date]:focus,input[type=email]:active,input[type=email]:focus,input[type=password]:active,input[type=password]:focus,input[type=submit]:active,input[type=submit]:focus,input[type=text]:active,input[type=text]:focus,input[type=time]:active,input[type=time]:focus,label:active,label:focus,select:active,select:focus,textarea:active,textarea:focus{background-image:none;box-shadow:none;outline:none;border:1px solid #a3c9ed}button:-moz-focus-inner,input[type=date]:-moz-focus-inner,input[type=email]:-moz-focus-inner,input[type=password]:-moz-focus-inner,input[type=submit]:-moz-focus-inner,input[type=text]:-moz-focus-inner,input[type=time]:-moz-focus-inner,label:-moz-focus-inner,select:-moz-focus-inner,textarea:-moz-focus-inner{border:0;padding:0}[class^=col-] button,[class^=col-] input[type=date],[class^=col-] input[type=email],[class^=col-] input[type=password],[class^=col-] input[type=submit],[class^=col-] input[type=text],[class^=col-] input[type=time],[class^=col-] select,[class^=col-] textarea{width:100%;min-width:100%;max-width:100%}label{display:block}label,label:active,label:focus{border:none}button{-webkit-appearance:none;border-radius:4px;background-clip:padding-box;cursor:pointer;color:#333;display:inline-block;font-family:Raleway,sans-serif;font-weight:regular;outline:0;overflow:visible;text-shadow:none;text-decoration:none;vertical-align:top;*padding-top:2px;*padding-bottom:0;background-color:#a3c9ed;border:1px solid #a3c9ed}button.active,button:hover{background-color:#4e97dc;color:#fff!important}.gal-2 img{width:49.5%;float:left}.gal-2 img:first-child{margin-right:1%}.gal-3 img{width:49.5%;float:left}.gal-3 img:first-child{margin-right:1%}.animated{-webkit-transition:all .5s;transition:all .5s;transition-timing-function:ease}.box,.shadow{box-shadow:1px 1px 3px #aaa}.box{padding:1.5rem;margin-bottom:1.5rem;background-color:#fff}.box:first-child{margin-top:1.5rem}.shadow-button{box-shadow:1px 1px 3px #aaa;cursor:pointer;-webkit-transition:all .2s;transition:all .2s;transition-timing-function:ease}.shadow-button:hover{box-shadow:none}ul.nav{margin-top:0;top:0;position:absolute}ul.nav:after,ul.nav:before{content:\" \";display:table}ul.nav:after{clear:both}ul.nav li{float:left}ul.nav li a{padding:0 1.5rem;height:3rem;line-height:3rem;background-color:#a3c9ed;color:#f8fbfe;display:block}ul.nav li a.active,ul.nav li a:hover{color:#fff;background-color:#4e97dc}nav.main{width:100%;position:relative;background-color:#a3c9ed;height:3rem}body{background-color:#eee}",""])},function(t,exports){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},function(t,exports,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=h[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(l(n.parts[r],e))}else{for(var a=[],r=0;r<n.parts.length;r++)a.push(l(n.parts[r],e));h[n.id]={id:n.id,refs:1,parts:a}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],a=o[1],s=o[2],l=o[3],c={css:a,media:s,sourceMap:l};i[r]?i[r].parts.push(c):e.push(i[r]={id:r,parts:[c]})}return e}function o(t,e){var i=m(),n=v[v.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function s(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function l(t,e){var i,n,o;if(e.singleton){var l=b++;i=g||(g=a(e)),n=c.bind(null,i,l,!1),o=c.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=s(e),n=u.bind(null,i),o=function(){r(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),n=p.bind(null,i),o=function(){r(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function c(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function p(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function u(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([i],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var h={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=n(t);return i(o,e),function(t){for(var r=[],a=0;a<o.length;a++){var s=o[a],l=h[s.id];l.refs--,r.push(l)}if(t){var c=n(t);i(c,e)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete h[l.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,exports,e){"use strict";var i=e(14),n=function(){function t(){var t=this;this.routes=[],this.findParam=new RegExp(":[a-zA-Z]*"),window.addEventListener("hashchange",function(){t.handleHashChange()}),document.addEventListener("DOMContentLoaded",function(){t.handleHashChange()})}return t.prototype.parseRouteUrl=function(t,e){var i=this.getMatchAndParamsOf(t,e.url);i.doesMatch&&e.callback(i.params)},t.prototype.getMatchAndParamsOf=function(t,e){var i,n=this,o=e.split("/"),r=t.split("/"),a=!1,s={},l=[];return o.length===r.length&&(r.map(function(t,e){t===o[e]?l.push(!0):n.findParam.test(o[e])?(i=o[e].replace(":",""),s[i]=t):l.push(!1)}),a=l.reduce(function(t,e){return t&&e})),{params:s,doesMatch:a}},t.prototype.handleHashChange=function(){var t=this;console.log(this);var e=window.location.hash.replace("#","");this.routes.forEach(function(i){t.parseRouteUrl(e,i)})},t.prototype.register=function(t,e){return console.log(this,this.routes),this.routes.push(new i(t,e)),this},t}();t.exports=n},function(t,exports){"use strict";var e=function(){function t(t,e){this.url=t,this.callback=e}return t}();t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(16),o=e(17),r=function(t){function e(){t.call(this)}return i(e,t),e.prototype.getpostList=function(t){var e;return this.collection[t.category]?this.collection[t.category]:(e=new o,this.collection[t.category]=e,e)},e}(n);t.exports=r},function(t,exports){"use strict";var e=function(){function t(){this.collection={}}return t.prototype.resetActive=function(){var t;for(t in this.collection)this.collection[t].active=!1},t}();t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(18),o=e(22),r=e(23),a=e(24),s=e(25),l=e(26),c=function(t){function e(){var e=this;t.call(this),this.page=1,this.template="",this.posts=[],this.api=new n,this.notDone=!0,this.leftPage=!0,this.params={},this.currentScrollPosition=l.get(),document.addEventListener("scroll",function(){e.notDone&&e.active&&e.viewHeight/2<window.pageYOffset&&e.appendOnScroll(e.params)})}return i(e,t),e.prototype.getPosts=function(t){this.params=t,this.leftPage&&this.viewElem.classList.add("loader"),this.cache&&!this.notDone?this.render(this.cache):this.fetchPostsByApi(t),this.leftPage&&(l.set(this.currentScrollPosition),this.leftPage=!1)},e.prototype.fetchPostsByApi=function(t){var e=this;t=t||{},t.page=t.page||1,this.api.getPosts(t).then(function(t){return t.json()}).then(function(t){t.length?(e.createPostList(t),e.compose(e.params.category),e.render(e.template),e.setCache(e.template),e.viewHeight=e.getHeight()):e.notDone=!1})},e.prototype.createPostList=function(t){for(var e,i=0,n=t.length;n>i;)e=t[i],e&&!this.getPostById(this.posts,e.id)&&this.posts.push(new o({id:e.id,title:e.title.rendered,content:e.content.rendered,excerpt:e.excerpt.rendered,image:e.featured_media})),i+=1},e.prototype.sortList=function(){this.posts.sort(function(t,e){return e.id-t.id})},e.prototype.compose=function(t){this.sortList(),this.template=this.posts.map(function(e){return a(e,t)}).join("")},e.prototype.appendOnScroll=function(t){this.page+=1,t.page=this.page,this.getPosts(t)},e.prototype.filterPosts=function(t){console.log(t)},e.prototype.setCache=function(t){t&&!this.notDone&&(this.cache=t)},e.prototype.getSinglePost=function(t){this.currentScrollPosition=l.get(),this.leftPage=!0;var e=this.getPostById(this.posts,t.id);e.render(s(e,t.category))},e.prototype.getPostById=function(t,e){var i;return t.forEach(function(t){t.id==e&&(i=t)}),i},e}(r);t.exports=c},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(19),o=function(t){function e(){t.call(this,"posts")}return i(e,t),e.prototype.getPosts=function(t){var e="";return t.category&&"all"!=t.category&&(t["filter[category_name]"]=t.category),this.get(t,e)},e}(n);t.exports=o},function(t,exports,e){"use strict";var i=e(20),n=e(21),o=function(){function t(t){this.baseUrl=i.APIURL+t}return t.prototype.get=function(t,e){var i,o;return e=e||this.baseUrl,e=this.addParams(t,e),i=n.generateKey(t,e),o=fetch(e)},t.prototype.addParams=function(t,e){var i,n="?";for(i in t)i&&t[i]&&(e+=n+i+"="+t[i],n="&");return e},t}();t.exports=o},function(t,exports){"use strict";t.exports={BASEURL:"http://localhost/wordpress/",APIURL:"/wordpress/wp-json/wp/v2/",VIEWELEM:"view"}},function(t,exports){"use strict";t.exports={postList:"",pages:{},api:{},categories:[],index:0,generateKey:function(t,e){var i,n=e+this.index;for(i in t)n+=t[i];return this.index+=1,n}}},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(23),o=function(t){function e(e){t.call(this),this.id=e&&e.id||0,this.title=e&&e.title||"",this.content=e&&e.content||"",this.excerpt=e&&e.excerpt||"",this.image=e&&e.image||""}return i(e,t),e}(n);t.exports=o},function(t,exports,e){"use strict";var i=e(20),n=function(){function t(){this.viewElem=document.getElementById(i.VIEWELEM)}return t.prototype.render=function(t){this.viewElem.innerHTML=t,this.viewElem.classList.remove("loader")},t.prototype.getHeight=function(){return this.viewElem.getBoundingClientRect().height},t}();t.exports=n},function(t,exports){"use strict";t.exports=function(t,e){var i='\n	<div id="post_'+t.id+'" class="box">\n		<div class="grid">\n			<div class="col-12">\n				<a href="#/post/'+e+"/"+t.id+'">\n				<h1 class="hug">\n					'+t.title+"\n				</h1>	\n				"+(t.image?"<img src="+t.image+">":"")+'\n				</a> \n			</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">\n				'+t.excerpt+'\n				<a href="#/post/'+e+"/"+t.id+'">\n					mehr lesen\n				</a> \n			</div>\n		</div>\n	</div>\n	';return i}},function(t,exports){"use strict";t.exports=function(t,e){var i='\n	<div id="post_'+t.id+'" class="box">\n		<div class="grid">\n		<div class="col-12">\n			<h1 class="serif hug">'+t.title+"</h1>\n			"+(t.image?"<img src="+t.image+">":"")+'\n		</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">'+t.content+'</div>\n		</div>\n	</div>\n	<a href="#/posts/'+e+'">\n		<div class="grid box">\n				<div class="col-12">\n					'+e+"\n				</div>\n		</div>\n	</a>\n	";return i}},function(t,exports){"use strict";var e={get:function(){return document.documentElement.scrollTop||document.body.scrollTop},set:function(t){setTimeout(function(){scrollTo(0,t)},100)}};t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(16),o=e(28),r=function(t){function e(){t.call(this)}return i(e,t),e.prototype.getPageView=function(t){var e;return this.collection[t.id]?this.collection[t.id]:(e=new o,this.collection[t.id]=e,e)},e}(n);t.exports=r},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(29),o=e(30),r=e(23),a=function(t){function e(){t.call(this),this.template="",this.api=new n}return i(e,t),e.prototype.getPage=function(t){var e=this;this.viewElem.classList.add("loader"),this.cache?this.render(this.cache):this.api.getPage(t).then(function(t){return t.json()}).then(function(t){e.createPage(t),e.template=e.applyTemplate(e.page),e.render(e.template),e.setCache()})},e.prototype.createPage=function(t){this.page=new o({id:t.id,title:t.title.rendered,content:t.content.rendered,image:t.featured_media})},e.prototype.setCache=function(){this.template&&this.page.id&&(this.cache=this.template)},e.prototype.applyTemplate=function(t){var e='\n		<div id="page_'+t.id+'" class="box">\n			<div class="grid">\n				<div class="col-12">\n					<h1>'+t.title+'</h1>\n					<img src="'+t.image+'" alt="" />\n				</div>\n			</div>\n			<div class="grid center">\n				<div class="col-12">'+t.content+"</div>\n			</div>\n		</div>\n		";return e},e}(r);t.exports=a},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(19),o=function(t){function e(){t.call(this,"pages")}return i(e,t),e.prototype.getPage=function(t){var e;return t.id&&(e=this.baseUrl+"/"+t.id.toString(),delete t.id),this.get(t,e)},e}(n);t.exports=o},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(23),o=function(t){function e(e){t.call(this),this.id=e&&e.id||"",this.title=e&&e.title||"",this.content=e&&e.content||"",this.image=e&&e.image||""}return i(e,t),e}(n);t.exports=o},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(23),o=function(t){function e(e){t.call(this),this.template=e||""}return i(e,t),e.prototype.getHome=function(){this.render(this.template)},e}(n);t.exports=o},function(t,exports){"use strict";var e='\n	<div class="grid box">\n		<h1 class="serif">Home View</h1>\n		<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>\n	</div>\n';t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(19),o=e(34),r=e(21),a=function(t){function e(){t.call(this,"categories"),this.categories=[]}return i(e,t),e.prototype.getCategories=function(){return this.get({},"")},e.prototype.resolveCategories=function(){var t=this;this.getCategories().then(function(t){return t.json()}).then(function(e){t.createCategories(e),r.categories=t.categories()})},e.prototype.createCategories=function(t){var e=this;t.forEach(function(i){e.categories.push(new o(t.id,t.name))})},e}(n);t.exports=a},function(t,exports){"use strict";var e=function(){function t(t,e){this.id=t,this.title=e}return t}();t.exports=e}]);
//# sourceMappingURL=bundle.js.map