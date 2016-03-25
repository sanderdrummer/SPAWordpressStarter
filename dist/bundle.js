/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// require('../style/main.less');
	var Router = __webpack_require__(12);
	var PostView = __webpack_require__(14);
	console.log(PostView);
	var postView = new PostView();
	Router.register('/post', 'post', function (params) {
	    postView.render();
	});


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Route = __webpack_require__(13);
	var routes = [];
	var findParam = new RegExp(':[a-zA-Z]*');
	/**
	 * Parse hash and url and check for matching
	 *
	 * @param  {string}   hash
	 * @param  {Route}   route
	 * @return {void}
	 */
	function parseRouteUrl(hash, route) {
	    var result = getMatchAndParamsOf(hash, route.url);
	    if (result.doesMatch) {
	        route.callback(result.params);
	    }
	}
	/**
	 * Checks if route matches hash
	 * and parses params from hash
	 *
	 * @param  {string}   hash
	 * @param  {string}   url
	 * @return {Object}
	 */
	function getMatchAndParamsOf(hash, url) {
	    var urlParts = url.split('/');
	    var hashParts = hash.split('/');
	    var doesMatch = false;
	    var params = {};
	    var allMatches = [];
	    var key;
	    // do both hash and url have the same size ?
	    // -> could match  
	    if (urlParts.length === hashParts.length) {
	        // check all parts of given hash for matching if 
	        // a part is indentified to be a param it is ignored 
	        // for matching but saved into params Object
	        hashParts.map(function (item, index) {
	            if (item === urlParts[index]) {
	                allMatches.push(true);
	            }
	            else if (findParam.test(urlParts[index])) {
	                // replace : indicator of param key
	                key = urlParts[index].replace(':', '');
	                params[key] = item;
	            }
	            else {
	                allMatches.push(false);
	            }
	        });
	        // reduce all matchings to one boolean
	        doesMatch = allMatches.reduce(function (a, b) {
	            return a && b;
	        });
	    }
	    // return doesMatch flag and parsed params
	    return {
	        params: params,
	        doesMatch: doesMatch
	    };
	}
	/**
	 */
	function handleHashChange() {
	    var hash = window.location.hash.replace('#', '');
	    routes.forEach(function (route) {
	        parseRouteUrl(hash, route);
	    });
	}
	// Adds global eventlistener for routing on hashchange
	window.addEventListener('hashchange', handleHashChange);
	// special case for startup
	document.addEventListener("DOMContentLoaded", handleHashChange);
	module.exports = {
	    register: function (url, title, callback) {
	        routes.push(new Route(url, title, callback));
	    }
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var Route = (function () {
	    function Route(url, title, callback) {
	        this.url = url;
	        this.title = title;
	        this.callback = callback;
	    }
	    return Route;
	}());
	module.exports = Route;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PostApi = __webpack_require__(15);
	var Post = __webpack_require__(17);
	var template = "\n<div class=\"grid center\">\n\t<div class=\"col-5\">" + this.title + "</div>\n</div>\n<div class=\"grid center\">\n\t<div class=\"col-5\">" + this.excerpt + "</div>\n\t<div class=\"col-5\">" + this.content + "</div>\n</div>\n";
	var PostView = (function () {
	    function PostView(config) {
	        this.template = '';
	        this.posts = [];
	        this.api = new PostApi();
	        this.view = document.getElementById('view');
	    }
	    PostView.prototype.render = function () {
	        var _this = this;
	        // get posts
	        this.api.getPosts()
	            .then(function (res) {
	            return res.json();
	        })
	            .then(function (res) {
	            console.log(res);
	            _this.createPostList(res);
	            _this.compile();
	        });
	    };
	    PostView.prototype.createPostList = function (rawPosts) {
	        var index = 0;
	        var length = rawPosts.length;
	        var rawPost;
	        this.posts = [];
	        while (index < length) {
	            rawPost = rawPosts[index];
	            if (rawPost) {
	                this.posts.push(new Post({
	                    title: rawPost.title.rendered,
	                    content: rawPost.content.rendered,
	                    excerpt: rawPost.excerpt.rendered
	                }));
	            }
	            index += 1;
	        }
	    };
	    PostView.prototype.compile = function () {
	        var index = 0;
	        var length = this.posts.length;
	        while (index < length) {
	            console.log(index);
	            this.template += this.applyTemplate(this.posts[index]);
	            index += 1;
	        }
	        this.view.innerHTML = this.template;
	    };
	    PostView.prototype.applyTemplate = function (post) {
	        return "\n\t\t\t<div class=\"grid center\">\n\t\t\t\t<div class=\"col-5\">" + post.title + "</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid center\">\n\t\t\t\t<div class=\"col-5\">" + post.excerpt + "</div>\n\t\t\t\t<div class=\"col-5\">" + post.content + "</div>\n\t\t\t</div>\n\t\t\t";
	    };
	    return PostView;
	}());
	module.exports = PostView;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ApiConfig = __webpack_require__(16);
	var PostApi = (function () {
	    function PostApi() {
	        this.url = ApiConfig.APIURL + 'posts';
	    }
	    PostApi.prototype.getPosts = function () {
	        return fetch(this.url);
	    };
	    return PostApi;
	}());
	module.exports = PostApi;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	    BASEURL: 'http://localhost/wordpress/',
	    APIURL: 'wp-json/wp/v2/'
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	var Post = (function () {
	    function Post(config) {
	        this.title = config && config.title || '';
	        this.content = config && config.content || '';
	        this.excerpt = config && config.excerpt || '';
	    }
	    return Post;
	}());
	module.exports = Post;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map