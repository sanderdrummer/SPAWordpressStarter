!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,exports,e){"use strict";function n(t){p.set(0),l.resetActive(),u.resetActive(),t.active=!0}e(13);var i=e(17),o=e(20),s=e(33),r=e(37),a=e(38),c=e(39),p=e(32),u=new o,l=new s,h=new r(a),d=new r(c),f=new i;window.location.hash||(window.location.hash="#/"),f.register("/",function(t){n(h),h.getPage()}).register("/static",function(t){u.getpostList(t),n(d),d.getPage()}).register("/posts",function(t){t.category="all";var e=u.getpostList(t);n(e),e.getPosts(t)}).register("/posts/:category",function(t){var e=u.getpostList(t);n(e),e.getPosts(t)}).register("/post/:category/:id",function(t){var e=u.getpostList(t);e.getSinglePost(t)}).register("/page/:id",function(t){var e=l.getPageView(t);n(e),e.getPage(t)})},,,,,,,,,,,,,function(t,exports){},,,,function(t,exports,e){"use strict";var n=e(18),i=e(19),o=function(){function t(){var t=this;this.routes=[],this.findParam=new RegExp(":[a-zA-Z]*"),window.addEventListener("hashchange",function(){t.handleHashChange()}),document.addEventListener("DOMContentLoaded",function(){t.handleHashChange()})}return t.prototype.parseRouteUrl=function(t,e){var n=this.getMatchAndParamsOf(t,e.url);n.doesMatch&&e.callback(new i(n.params))},t.prototype.getMatchAndParamsOf=function(t,e){var n,i=this,o=e.split("/"),s=t.split("/"),r=!1,a={},c=[];return o.length===s.length&&(s.map(function(t,e){t===o[e]?c.push(!0):i.findParam.test(o[e])?(n=o[e].replace(":",""),a[n]=t):c.push(!1)}),r=c.reduce(function(t,e){return t&&e})),{params:a,doesMatch:r}},t.prototype.handleHashChange=function(){var t=this,e=window.location.hash.replace("#","");this.routes.forEach(function(n){t.parseRouteUrl(e,n)})},t.prototype.register=function(t,e){return this.routes.push(new n(t,e)),this},t}();t.exports=o},function(t,exports){"use strict";var e=function(){function t(t,e){this.url=t,this.callback=e}return t}();t.exports=e},function(t,exports){"use strict";var e=function(){function t(t){this.id=t.id||0,this.category=t.category||"",this.page=t.page||1}return t.prototype.getCacheKey=function(){return"page"+this.page.toString()+this.category.toString()+this.id.toString()},t}();t.exports=e},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(21),o=e(22),s=function(t){function e(){t.call(this)}return n(e,t),e.prototype.getpostList=function(t){var e;return this.collection[t.category]?this.collection[t.category]:(e=new o,this.collection[t.category]=e,e)},e}(i);t.exports=s},function(t,exports){"use strict";var e=function(){function t(){this.collection={}}return t.prototype.resetActive=function(){var t;for(t in this.collection)this.collection[t].active=!1},t}();t.exports=e},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(23),o=e(26),s=e(27),r=e(29),a=e(30),c=e(31),p=e(32),u=e(19),l=e(40),h=function(t){function e(){var e=this;t.call(this),this.page=1,this.pageCache={},this.template="",this.posts=[],this.api=new i,this.notDone=!0,this.leftPage=!0,this.loading=!1,this.params=new u({}),this.currentScrollPosition=p.get(),this.loaderElement=this.getLoaderElement(),document.addEventListener("scroll",function(){e.notDone&&e.active&&!e.leftPage&&!e.loading&&e.appendOnScroll(e.params)})}return n(e,t),e.prototype.getPosts=function(t){this.params=t,this.leftPage&&this.loader.show(),this.templateCache&&!this.notDone?this.render(this.templateCache):this.getPostsBy(t),this.leftPage&&(p.set(this.currentScrollPosition),this.leftPage=!1)},e.prototype.getPostsBy=function(t){t=t||new u({}),t.page=t.page||1;var e=t.getCacheKey();this.pageCache[e]?(this.posts=this.pageCache[e],this.processTemplate()):this.loading||this.fetchPostsByApi(t)},e.prototype.processTemplate=function(){this.applyTemplate(this.params.category),this.render(this.template),this.setTemplateCache(this.template),this.viewHeight=this.getHeight()},e.prototype.fetchPostsByApi=function(t){var e=this,n=t.getCacheKey();this.addListLoadingState(),this.api.getPosts(t).then(function(t){return t.json()}).then(function(t){t.length?(e.createPostList(t),e.processTemplate(),e.pageCache[n]=e.posts,e.removeListLoadingState()):(e.notDone=!1,e.removeListLoadingState())},function(){e.removeListLoadingState()})},e.prototype.createPostList=function(t){for(var e,n=0,i=t.length;i>n;)e=t[n],e&&!this.getPostById(this.posts,e.id)&&this.posts.push(new o(e)),n+=1},e.prototype.sortList=function(){this.posts.sort(function(t,e){return e.id-t.id})},e.prototype.appendOnScroll=function(t){this.page+=1,t.page=this.page,this.getPosts(t)},e.prototype.filterPosts=function(t){console.log(t)},e.prototype.setTemplateCache=function(t){t&&!this.notDone&&(this.templateCache=t)},e.prototype.getSinglePost=function(t){var e=this,n=this.getPostById(this.posts,t.id);this.currentScrollPosition=p.get(),this.leftPage=!0,n?(l.pageIsLoading(n),n.render(a(n,t.category)),p.set(0),l.pageLoaded(n)):(l.pageIsLoading(n),this.api.getPost(t).then(function(t){return t.json()}).then(function(i){i.id?(n=new o(i),n.render(a(n,t.category)),p.set(0),l.pageLoaded(n)):e.notDone=!1}))},e.prototype.applyTemplate=function(t){var e="";switch(t){case"band":e+='<div class="flex">',e+=this.compose(c,t),e+="<div>";break;default:e=this.compose(r,t)}this.template=e},e.prototype.compose=function(t,e){return this.sortList(),this.posts.map(function(n){return t(n,e)}).join("")},e.prototype.getPostById=function(t,e){var n;return t.forEach(function(t){t.id==e&&(n=t)}),n},e.prototype.getLoaderElement=function(){var t=document.getElementById("listLoader");return t},e.prototype.addListLoadingState=function(){l.pageIsLoading(this),this.loading=!0,this.loaderElement.style.display="block"},e.prototype.removeListLoadingState=function(){this.loading=!1,this.loaderElement.style.display="none"},e}(s);t.exports=h},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(24),o=e(25),s=function(t){function e(){t.call(this,"posts")}return n(e,t),e.prototype.getPosts=function(t){var e="";return t.category&&"all"!=t.category&&(t["filter[category_name]"]=t.category),this.get(t,e)},e.prototype.getPost=function(t){return fetch(o.APIURL+"posts/"+t.id)},e}(i);t.exports=s},function(t,exports,e){"use strict";var n=e(25),i=function(){function t(t){this.baseUrl=n.APIURL+t,this.cache={}}return t.prototype.get=function(e,n){var i;return n=n||this.baseUrl,n=t.addParams(e,n),i=fetch(n)},t.addParams=function(t,e){var n,i="?";for(n in t)n&&t[n]&&"getCacheKey"!==n&&(e+=i+n+"="+t[n],i="&");return e},t}();t.exports=i},function(t,exports){"use strict";t.exports={BASEURL:"http://localhost/wordpress/",APIURL:"/wordpress/wp-json/wp/v2/",VIEWELEM:"view",NAVELEM:"nav",MENU:"main-menu"}},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(27),o=function(t){function e(e){t.call(this),this.id=e&&e.id||0,this.title=e&&e.title&&e.title.rendered||"",this.content=e&&e.content&&e.content.rendered||"",this.excerpt=e&&e.excerpt&&e.excerpt.rendered||"",this.image=e&&e.featured_media||""}return n(e,t),e}(i);t.exports=o},function(t,exports,e){"use strict";var n=e(25),i=e(28),o=function(){function t(){this.viewElem=document.getElementById(n.VIEWELEM),this.loader=new i}return t.prototype.render=function(t){this.viewElem.innerHTML=t,this.loader.hide()},t.prototype.getHeight=function(){return this.viewElem.getBoundingClientRect().height},t}();t.exports=o},function(t,exports){"use strict";var e=function(){function t(){this.loaderElem=document.getElementById("loader")}return t.prototype.show=function(){this.loaderElem.style.display="block"},t.prototype.hide=function(){this.loaderElem.style.display="none"},t}();t.exports=e},function(t,exports){"use strict";t.exports=function(t,e){return'\n	<div id="post_'+t.id+'" class="box effect8">\n		<div class="grid">\n			<div class="col-12">\n				<a href="#/post/'+e+"/"+t.id+'">\n				<h2 class="hug">\n					'+t.title+"\n				</h2>	\n				"+(t.image?"<img src="+t.image+">":"")+'\n				</a> \n			</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">\n				'+t.excerpt+'\n				<a href="#/post/'+e+"/"+t.id+'">\n					mehr lesen\n				</a> \n			</div>\n		</div>\n	</div>\n	'}},function(t,exports){"use strict";t.exports=function(t,e){var n='\n	<div id="post_'+t.id+'" class="box">\n		<div class="grid">\n		<div class="col-12">\n			<h2 class="serif hug">'+t.title+"</h2>\n			"+(t.image?"<img src="+t.image+">":"")+'\n		</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">'+t.content+'</div>\n		</div>\n	</div>\n	<a href="#/posts/'+e+'">\n		<div class="box">\n			'+e+"\n		</div>\n	</a>\n	";return n}},function(t,exports){"use strict";t.exports=function(t,e){return'\n	<div id="post_'+t.id+'" class="cards-item">\n		<a href="#/post/'+e+"/"+t.id+'">\n			<div>\n				<h2 class="hug">\n					'+t.title+"\n				</h2>	\n				"+(t.image?"<img src="+t.image+">":"")+"\n			</div>\n			"+t.excerpt+"\n		</a>\n	</div>\n	"}},function(t,exports){"use strict";var e={get:function(){return document.documentElement.scrollTop||document.body.scrollTop},set:function(t){setTimeout(function(){scrollTo(0,t)},100)}};t.exports=e},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(21),o=e(34),s=function(t){function e(){t.call(this)}return n(e,t),e.prototype.getPageView=function(t){var e;return this.collection[t.id]?this.collection[t.id]:(e=new o,this.collection[t.id]=e,e)},e}(i);t.exports=s},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(35),o=e(36),s=e(27),r=e(40),a=function(t){function e(){t.call(this),this.templateString="",this.api=new i}return n(e,t),e.prototype.getPage=function(t){var e=this;r.pageIsLoading(this),this.loader.show(),this.cache?this.render(this.cache):this.api.getPage(t).then(function(t){return t.json()}).then(function(t){e.page=new o(t),e.templateString=e.applyTemplate(e.page),e.render(e.templateString),e.setCache(),r.pageLoaded(e)})},e.prototype.setCache=function(){this.templateString&&this.page.id&&(this.cache=this.templateString)},e.prototype.applyTemplate=function(t){var e='\n		<div id="page_'+t.id+'" class="box">\n			<div class="grid">\n				<div class="col-12">\n					<h2>'+t.title+'</h2>\n					<img src="'+t.image+'" alt="" />\n				</div>\n			</div>\n			<div class="grid center">\n				<div class="col-12">'+t.content+"</div>\n			</div>\n		</div>\n		";return e},e}(s);t.exports=a},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(24),o=function(t){function e(){t.call(this,"pages")}return n(e,t),e.prototype.getPage=function(t){var e;return t.id&&(e=this.baseUrl+"/"+t.id.toString(),delete t.id),this.get(t,e)},e}(i);t.exports=o},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(27),o=function(t){function e(e){t.call(this),this.id=e&&e.id||"",this.title=e&&e.title&&e.title.rendered||"",this.content=e&&e.content&&e.content.rendered||"",this.image=e&&e.featured_media||""}return n(e,t),e}(i);t.exports=o},function(t,exports,e){"use strict";var n=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=e(27),o=e(40),s=function(t){function e(e){t.call(this),this.template=e||""}return n(e,t),e.prototype.getPage=function(){o.pageIsLoading(this),this.render(this.template),o.pageLoaded(this)},e}(i);t.exports=s},function(t,exports){"use strict";var e='\n	<div class="item box">\n		<h2 class="serif"><span class="icon-music"></span> ASD Home View</h2>\n		<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>\n	</div>\n';t.exports=e},function(t,exports){"use strict";var e='\n	<div class="grid box">\n		<h1 class="serif">Static View</h1>\n		<p class="lead"> StaticLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>	\n		SUPER STATIC VIEW TEMPLATE WUHU	\n\n	</div>\n';t.exports=e},function(t,exports){"use strict";var e={bus:{},register:function(t,e){return this.bus[t]||(this.bus[t]=[]),this.bus[t].push(e)},on:function(t,e){var n,i=this.bus[t];if(i)for(n=i.length;n--;)i[n](e)},pageIsLoading:function(t){console.log("load page",t)},pageLoaded:function(t){console.log("loaded page",t)},postsLoading:function(t){console.log("load posts",t)},postsLoaded:function(t){console.log("loaded posts",t)}};t.exports=e}]);
//# sourceMappingURL=bundle.js.map