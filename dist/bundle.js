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
	var PostList = __webpack_require__(19);
	var HomeView = __webpack_require__(22);
	var postList = new PostList();
	var homeView = new HomeView();
	Router.register('/', 'Home', function (params) {
	    homeView.getHome();
	    // postList.getPosts();
	});
	Router.register('/posts', 'post', function (params) {
	    postList.getPosts(params);
	});
	Router.register('/post/:id', 'post', function (params) {
	    postList.getSinglePost(params);
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
	var _this = this;
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
	        return _this;
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
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(20);
	var PostApi = (function (_super) {
	    __extends(PostApi, _super);
	    function PostApi() {
	        _super.call(this, 'posts');
	    }
	    PostApi.prototype.getPosts = function (params) {
	        return this.get(params, '');
	    };
	    return PostApi;
	}(Api));
	module.exports = PostApi;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	    BASEURL: 'http://localhost/wordpress/',
	    APIURL: 'wp-json/wp/v2/',
	    VIEWELEM: 'view'
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(18);
	var Post = (function (_super) {
	    __extends(Post, _super);
	    function Post(config) {
	        _super.call(this);
	        this.id = config && config.id || '';
	        this.title = config && config.title || '';
	        this.content = config && config.content || '';
	        this.excerpt = config && config.excerpt || '';
	    }
	    return Post;
	}(View));
	module.exports = Post;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Config = __webpack_require__(16);
	var View = (function () {
	    function View() {
	        this.viewElem = document.getElementById(Config.VIEWELEM);
	    }
	    View.prototype.render = function (config) {
	        config.template = config.template || '';
	        config.append = config.append || false;
	        if (config.append) {
	            this.viewElem.innerHTML += config.template;
	        }
	        else {
	            this.viewElem.innerHTML = config.template;
	        }
	    };
	    View.prototype.getHeight = function () {
	        return this.viewElem.getBoundingClientRect().height;
	    };
	    return View;
	}());
	module.exports = View;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PostApi = __webpack_require__(15);
	var Post = __webpack_require__(17);
	var View = __webpack_require__(18);
	var template = __webpack_require__(21);
	var cache = __webpack_require__(24);
	var PostList = (function (_super) {
	    __extends(PostList, _super);
	    function PostList() {
	        var _this = this;
	        _super.call(this);
	        this.page = 1;
	        this.append = false;
	        this.template = '';
	        this.posts = [];
	        this.api = new PostApi();
	        this.notDone = true;
	        document.addEventListener('scroll', function () {
	            if (_this.notDone &&
	                _this.viewHeight / 2 < window.pageYOffset) {
	                _this.appendOnScroll();
	            }
	        });
	    }
	    PostList.prototype.getPosts = function (params) {
	        var _this = this;
	        // check if posts are already in cache
	        if (cache.postList && !this.notDone) {
	            this.render({
	                template: cache.postList
	            });
	        }
	        else {
	            // extend params
	            params = params || {};
	            params.page = params.page || 1;
	            // fetch posts by api
	            this.api.getPosts(params)
	                .then(function (res) {
	                return res.json();
	            })
	                .then(function (res) {
	                var config;
	                if (res.length) {
	                    _this.createPostList(res);
	                    _this.compose();
	                    config = {
	                        template: _this.template,
	                        append: params.page > 1
	                    };
	                    _this.render(config);
	                    _this.setCache(config);
	                    _this.viewHeight = _this.getHeight();
	                }
	                else {
	                    _this.notDone = false;
	                }
	            });
	        }
	    };
	    PostList.prototype.createPostList = function (rawPosts) {
	        var index = 0;
	        var length = rawPosts.length;
	        var rawPost;
	        while (index < length) {
	            rawPost = rawPosts[index];
	            if (rawPost) {
	                this.posts[rawPost.id] = new Post({
	                    id: rawPost.id,
	                    title: rawPost.title.rendered,
	                    content: rawPost.content.rendered,
	                    excerpt: rawPost.excerpt.rendered
	                });
	            }
	            index += 1;
	        }
	    };
	    PostList.prototype.compose = function () {
	        this.template = this.posts.map(function (post) {
	            return template(post);
	        }).join('');
	    };
	    PostList.prototype.appendOnScroll = function () {
	        this.page += 1;
	        this.getPosts({ page: this.page });
	    };
	    PostList.prototype.setCache = function (config) {
	        // extend cache
	        if (config.template != 'false') {
	            cache.postList += config.template;
	        }
	        else if (config.append && config.template != 'false') {
	            cache.postList = config.template;
	        }
	    };
	    PostList.prototype.getSinglePost = function (params) {
	        console.log(params, this.posts);
	        var post = this.posts[params.id];
	        post.render({
	            template: template(post)
	        });
	    };
	    return PostList;
	}(View));
	module.exports = PostList;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ApiConfig = __webpack_require__(16);
	var Api = (function () {
	    function Api(type) {
	        this.baseUrl = ApiConfig.APIURL + type;
	    }
	    Api.prototype.get = function (params, url) {
	        url = url || this.baseUrl;
	        url = this.addParams(params);
	        return fetch(url);
	    };
	    Api.prototype.addParams = function (params) {
	        var url = this.baseUrl;
	        var seperator = '?';
	        var key;
	        for (key in params) {
	            if (key && params[key]) {
	                url += seperator + key +
	                    '=' + params[key];
	                seperator = '&';
	            }
	        }
	        return url;
	    };
	    return Api;
	}());
	module.exports = Api;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function applyTemplate(post) {
	    var template = "\n\t<div id=\"post_" + post.id + "\">\n\t\t<div class=\"grid center\">\n\t\t\t<div class=\"col-5\"><a href=\"#/post/" + post.id + "\">" + post.title + "</a> </div>\n\t\t</div>\n\t\t<div class=\"grid center\">\n\t\t\t<div class=\"col-5\">" + post.excerpt + "</div>\n\t\t\t<div class=\"col-5 hidden\">" + post.content + "</div>\n\t\t</div>\n\t</div>\n\t";
	    return template;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(18);
	var template = "\n\t<div class=\"center container grid\">\n\t\t<h1>Home View</h1>\n\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed illo corporis deserunt iure tempore! Aut ut totam facere maiores eaque beatae autem error reiciendis vitae. Atque quas illum asperiores.</p>\n\t</div>\n";
	var HomeView = (function (_super) {
	    __extends(HomeView, _super);
	    function HomeView() {
	        _super.call(this);
	        this.template = template;
	    }
	    HomeView.prototype.getHome = function () {
	        this.render({
	            template: this.template,
	            append: false
	        });
	    };
	    return HomeView;
	}(View));
	module.exports = HomeView;


/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	    postList: ''
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map