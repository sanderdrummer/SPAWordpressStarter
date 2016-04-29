!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,exports,e){"use strict";function i(t){u.set(0),h.resetActive(),l.resetActive(),t.active=!0}e(11);var n=e(15),o=e(18),s=e(30),r=e(34),c=e(35),a=e(36),p=e(37),u=e(29),l=new o,h=new s,d=new r(c),f=new r(a),g=new n;new p;window.location.hash||(window.location.hash="#/"),g.register("/",function(t){i(d),d.getPage()}).register("/static",function(t){l.getpostList(t);i(f),f.getPage()}).register("/posts",function(t){t.category="all";var e=l.getpostList(t);i(e),e.getPosts(t)}).register("/posts/:category",function(t){var e=l.getpostList(t);i(e),e.getPosts(t)}).register("/post/:category/:id",function(t){var e=l.getpostList(t);e.getSinglePost(t)}).register("/page/:id",function(t){var e=h.getPageView(t);i(e),e.getPage(t)})},,,,,,,,,,,function(t,exports){},,,,function(t,exports,e){"use strict";var i=e(16),n=e(17),o=function(){function t(){var t=this;this.routes=[],this.findParam=new RegExp(":[a-zA-Z]*"),window.addEventListener("hashchange",function(){t.handleHashChange()}),document.addEventListener("DOMContentLoaded",function(){t.handleHashChange()})}return t.prototype.parseRouteUrl=function(t,e){var i=this.getMatchAndParamsOf(t,e.url);i.doesMatch&&e.callback(new n(i.params))},t.prototype.getMatchAndParamsOf=function(t,e){var i,n=this,o=e.split("/"),s=t.split("/"),r=!1,c={},a=[];return o.length===s.length&&(s.map(function(t,e){t===o[e]?a.push(!0):n.findParam.test(o[e])?(i=o[e].replace(":",""),c[i]=t):a.push(!1)}),r=a.reduce(function(t,e){return t&&e})),{params:c,doesMatch:r}},t.prototype.handleHashChange=function(){var t=this,e=window.location.hash.replace("#","");this.routes.forEach(function(i){t.parseRouteUrl(e,i)})},t.prototype.register=function(t,e){return this.routes.push(new i(t,e)),this},t}();t.exports=o},function(t,exports){"use strict";var e=function(){function t(t,e){this.url=t,this.callback=e}return t}();t.exports=e},function(t,exports){"use strict";var e=function(){function t(t){this.id=t.id||0,this.category=t.category||"",this.page=t.page||1}return t.prototype.getCacheKey=function(){return"page"+this.page.toString()+this.category.toString()+this.id.toString()},t}();t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(19),o=e(20),s=function(t){function e(){t.call(this)}return i(e,t),e.prototype.getpostList=function(t){var e;return this.collection[t.category]?this.collection[t.category]:(e=new o,this.collection[t.category]=e,e)},e}(n);t.exports=s},function(t,exports){"use strict";var e=function(){function t(){this.collection={}}return t.prototype.resetActive=function(){var t;for(t in this.collection)this.collection[t].active=!1},t}();t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(21),o=e(24),s=e(25),r=e(26),c=e(27),a=e(28),p=e(29),u=e(17),l=function(t){function e(){var e=this;t.call(this),this.page=1,this.pageCache={},this.template="",this.posts=[],this.api=new n,this.notDone=!0,this.leftPage=!0,this.params=new u({}),this.currentScrollPosition=p.get(),document.addEventListener("scroll",function(){e.notDone&&e.active&&e.viewHeight/2<window.pageYOffset&&e.appendOnScroll(e.params)})}return i(e,t),e.prototype.getPosts=function(t){this.params=t,this.leftPage&&this.viewElem.classList.add("loader"),this.templateCache&&!this.notDone?this.render(this.templateCache):this.getPostsBy(t),this.leftPage&&(p.set(this.currentScrollPosition),this.leftPage=!1)},e.prototype.getPostsBy=function(t){t=t||new u({}),t.page=t.page||1;var e=t.getCacheKey();this.pageCache[e]?(this.posts=this.pageCache[e],this.processTemplate()):this.fetchPostsByApi(t)},e.prototype.processTemplate=function(){this.applyTemplate(this.params.category),this.render(this.template),this.setTemplateCache(this.template),this.viewHeight=this.getHeight()},e.prototype.fetchPostsByApi=function(t){var e=this,i=t.getCacheKey();this.api.getPosts(t).then(function(t){return t.json()}).then(function(t){t.length?(e.createPostList(t),e.processTemplate(),e.pageCache[i]=e.posts):e.notDone=!1})},e.prototype.createPostList=function(t){for(var e,i=0,n=t.length;n>i;)e=t[i],e&&!this.getPostById(this.posts,e.id)&&this.posts.push(new o(e)),i+=1},e.prototype.sortList=function(){this.posts.sort(function(t,e){return e.id-t.id})},e.prototype.appendOnScroll=function(t){this.page+=1,t.page=this.page,this.getPosts(t)},e.prototype.filterPosts=function(t){console.log(t)},e.prototype.setTemplateCache=function(t){t&&!this.notDone&&(this.templateCache=t)},e.prototype.getSinglePost=function(t){this.currentScrollPosition=p.get(),this.leftPage=!0;var e=this.getPostById(this.posts,t.id);e.render(c(e,t.category)),p.set(0)},e.prototype.applyTemplate=function(t){var e="";switch(t){case"gigs":e+='<div class="flex">',e+=this.compose(a,t),e+="<div>",console.log(e);break;default:e=this.compose(r,t)}this.template=e},e.prototype.compose=function(t,e){return this.sortList(),this.posts.map(function(i){return t(i,e)}).join("")},e.prototype.getPostById=function(t,e){var i;return t.forEach(function(t){t.id==e&&(i=t)}),i},e}(s);t.exports=l},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(22),o=function(t){function e(){t.call(this,"posts")}return i(e,t),e.prototype.getPosts=function(t){var e="";return t.category&&"all"!=t.category&&(t["filter[category_name]"]=t.category),this.get(t,e)},e}(n);t.exports=o},function(t,exports,e){"use strict";var i=e(23),n=function(){function t(t){this.baseUrl=i.APIURL+t,this.cache={}}return t.prototype.get=function(e,i){var n;return i=i||this.baseUrl,i=t.addParams(e,i),n=fetch(i)},t.addParams=function(t,e){var i,n="?";for(i in t)i&&t[i]&&(e+=n+i+"="+t[i],n="&");return e},t}();t.exports=n},function(t,exports){"use strict";t.exports={BASEURL:"http://localhost/wordpress/",APIURL:"/wordpress/wp-json/wp/v2/",VIEWELEM:"view",NAVELEM:"nav"}},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(25),o=function(t){function e(e){t.call(this),this.id=e&&e.id||0,this.title=e&&e.title&&e.title.rendered||"",this.content=e&&e.content&&e.content.rendered||"",this.excerpt=e&&e.excerpt&&e.excerpt.rendered||"",this.image=e&&e.featured_media||""}return i(e,t),e}(n);t.exports=o},function(t,exports,e){"use strict";var i=e(23),n=function(){function t(){this.viewElem=document.getElementById(i.VIEWELEM)}return t.prototype.render=function(t){this.viewElem.innerHTML=t,this.viewElem.classList.remove("loader")},t.prototype.getHeight=function(){return this.viewElem.getBoundingClientRect().height},t}();t.exports=n},function(t,exports){"use strict";t.exports=function(t,e){return'\n	<div id="post_'+t.id+'" class="box">\n		<div class="grid">\n			<div class="col-12">\n				<a href="#/post/'+e+"/"+t.id+'">\n				<h2 class="hug">\n					'+t.title+"\n				</h2>	\n				"+(t.image?"<img src="+t.image+">":"")+'\n				</a> \n			</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">\n				'+t.excerpt+'\n				<a href="#/post/'+e+"/"+t.id+'">\n					mehr lesen\n				</a> \n			</div>\n		</div>\n	</div>\n	'}},function(t,exports){"use strict";t.exports=function(t,e){var i='\n	<div id="post_'+t.id+'" class="box">\n		<div class="grid">\n		<div class="col-12">\n			<h2 class="serif hug">'+t.title+"</h2>\n			"+(t.image?"<img src="+t.image+">":"")+'\n		</div>\n		</div>\n		<div class="grid">\n			<div class="col-12">'+t.content+'</div>\n		</div>\n	</div>\n	<a href="#/posts/'+e+'">\n		<div class="box">\n			'+e+"\n		</div>\n	</a>\n	";return i}},function(t,exports){"use strict";t.exports=function(t,e){return'\n	<div id="post_'+t.id+'" class="cards-item">\n		<div>\n			<h2 class="hug">\n				'+t.title+'\n			</h2>	\n			<a href="#/post/'+e+"/"+t.id+'">\n			'+(t.image?"<img src="+t.image+">":"")+"\n			</a> \n		</div>\n				"+t.excerpt+'\n				<a href="#/post/'+e+"/"+t.id+'">\n					mehr lesen\n				</a> \n	</div>\n	'}},function(t,exports){"use strict";var e={get:function(){return document.documentElement.scrollTop||document.body.scrollTop},set:function(t){setTimeout(function(){scrollTo(0,t)},100)}};t.exports=e},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(19),o=e(31),s=function(t){function e(){t.call(this)}return i(e,t),e.prototype.getPageView=function(t){var e;return this.collection[t.id]?this.collection[t.id]:(e=new o,this.collection[t.id]=e,e)},e}(n);t.exports=s},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(32),o=e(33),s=e(25),r=function(t){function e(){t.call(this),this.templateString="",this.api=new n}return i(e,t),e.prototype.getPage=function(t){var e=this;this.viewElem.classList.add("loader"),this.cache?this.render(this.cache):this.api.getPage(t).then(function(t){return t.json()}).then(function(t){e.page=new o(t),e.templateString=e.applyTemplate(e.page),e.render(e.templateString),e.setCache()})},e.prototype.setCache=function(){this.templateString&&this.page.id&&(this.cache=this.templateString)},e.prototype.applyTemplate=function(t){var e='\n		<div id="page_'+t.id+'" class="box">\n			<div class="grid">\n				<div class="col-12">\n					<h2>'+t.title+'</h2>\n					<img src="'+t.image+'" alt="" />\n				</div>\n			</div>\n			<div class="grid center">\n				<div class="col-12">'+t.content+"</div>\n			</div>\n		</div>\n		";return e},e}(s);t.exports=r},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(22),o=function(t){function e(){t.call(this,"pages")}return i(e,t),e.prototype.getPage=function(t){var e;return t.id&&(e=this.baseUrl+"/"+t.id.toString(),delete t.id),this.get(t,e)},e}(n);t.exports=o},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(25),o=function(t){function e(e){t.call(this),this.id=e&&e.id||"",this.title=e&&e.title&&e.title.rendered||"",this.content=e&&e.content&&e.content.rendered||"",this.image=e&&e.featured_media||""}return i(e,t),e}(n);t.exports=o},function(t,exports,e){"use strict";var i=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=e(25),o=function(t){function e(e){t.call(this),this.template=e||""}return i(e,t),e.prototype.getPage=function(){this.render(this.template)},e}(n);t.exports=o},function(t,exports){"use strict";var e='\n	<div class="item box">\n		<h2 class="serif"><span class="icon-music"></span> ASD Home View</h2>\n		<p class="lead"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>		\n		<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>\n	</div>\n';t.exports=e},function(t,exports){"use strict";var e='\n	<div class="grid box">\n		<h1 class="serif">Static View</h1>\n		<p class="lead"> StaticLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>	\n		SUPER STATIC VIEW TEMPLATE WUHU	\n\n	</div>\n';t.exports=e},function(t,exports,e){"use strict";var i=e(23),n=function(){function t(){var t=this;this.elem=document.getElementById(i.NAVELEM),this.toggle=this.elem.querySelector(".toggle"),this.toggle.addEventListener("click",function(){return t.toggleNav()})}return t.prototype.toggleNav=function(){this.elem.classList.toggle("inView")},t}();t.exports=n}]);
//# sourceMappingURL=bundle.js.map