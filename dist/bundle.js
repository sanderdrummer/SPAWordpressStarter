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
	var PageView = __webpack_require__(25);
	var HomeView = __webpack_require__(22);
	var CategoryApi = __webpack_require__(30);
	var postList = new PostList();
	var pageView = new PageView();
	var homeView = new HomeView();
	var categorieApi = new CategoryApi();
	categorieApi.getCategories();
	Router.register('/', function (params) {
	    homeView.getHome();
	});
	Router.register('/posts', function (params) {
	    postList.getPosts(params);
	});
	Router.register('/posts/:category', function (params) {
	    postList.filterPosts(params);
	});
	Router.register('/post/:id', function (params) {
	    postList.getSinglePost(params);
	});
	Router.register('/page/:id', function (params) {
	    pageView.getPage(params);
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
	    register: function (url, callback) {
	        routes.push(new Route(url, callback));
	        return _this;
	    }
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var Route = (function () {
	    function Route(url, callback) {
	        this.url = url;
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
	    APIURL: '/wordpress/wp-json/wp/v2/',
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
	        this.id = config && config.id || 0;
	        this.title = config && config.title || '';
	        this.content = config && config.content || '';
	        this.excerpt = config && config.excerpt || '';
	        this.image = config && config.image || '';
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
	    View.prototype.render = function (template) {
	        this.viewElem.innerHTML = template;
	        this.viewElem.classList.remove('loader');
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
	var scrollPosition = __webpack_require__(29);
	var PostList = (function (_super) {
	    __extends(PostList, _super);
	    function PostList() {
	        var _this = this;
	        _super.call(this);
	        this.page = 1;
	        this.template = '';
	        this.posts = [];
	        this.api = new PostApi();
	        this.notDone = true;
	        this.leftPage = true;
	        this.params = {};
	        this.currentScrollPosition = scrollPosition.get();
	        document.addEventListener('scroll', function () {
	            if (_this.notDone &&
	                _this.viewHeight / 2 < window.pageYOffset) {
	                _this.appendOnScroll(_this.params);
	            }
	        });
	    }
	    PostList.prototype.getPosts = function (params) {
	        this.params = params;
	        if (this.leftPage) {
	            this.viewElem.classList.add('loader');
	        }
	        // check if posts are already in cache
	        if (cache.postList && !this.notDone) {
	            this.render(cache.postList);
	        }
	        else {
	            this.fetchPostsByApi(params);
	        }
	        if (this.leftPage) {
	            scrollPosition.set(this.currentScrollPosition);
	            this.leftPage = false;
	        }
	        console.log(this.posts);
	    };
	    PostList.prototype.fetchPostsByApi = function (params) {
	        var _this = this;
	        // extend params
	        params = params || {};
	        params.page = params.page || 1;
	        // fetch posts by api
	        this.api.getPosts(params)
	            .then(function (res) {
	            return res.json();
	        })
	            .then(function (res) {
	            if (res.length) {
	                _this.createPostList(res);
	                _this.compose();
	                _this.render(_this.template);
	                _this.setCache(_this.template);
	                _this.viewHeight = _this.getHeight();
	            }
	            else {
	                _this.notDone = false;
	            }
	        });
	    };
	    PostList.prototype.createPostList = function (rawPosts) {
	        var index = 0;
	        var length = rawPosts.length;
	        var rawPost;
	        while (index < length) {
	            rawPost = rawPosts[index];
	            if (rawPost &&
	                !this.getPostById(this.posts, rawPost.id)) {
	                this.posts.push(new Post({
	                    id: rawPost.id,
	                    title: rawPost.title.rendered,
	                    content: rawPost.content.rendered,
	                    excerpt: rawPost.excerpt.rendered,
	                    image: rawPost.featured_media
	                }));
	            }
	            index += 1;
	        }
	    };
	    PostList.prototype.sortList = function () {
	        this.posts.sort(function (a, b) {
	            return b.id - a.id;
	        });
	    };
	    PostList.prototype.compose = function () {
	        this.sortList();
	        this.template = this.posts.map(function (post) {
	            return template(post);
	        }).join('');
	    };
	    PostList.prototype.appendOnScroll = function (params) {
	        this.page += 1;
	        params.page = this.page;
	        this.getPosts(params);
	    };
	    PostList.prototype.filterPosts = function (filterVar) {
	        console.log(filterVar);
	    };
	    PostList.prototype.setCache = function (template) {
	        // extend cache
	        if (template && !this.notDone) {
	            cache.postList = template;
	        }
	    };
	    PostList.prototype.getSinglePost = function (params) {
	        this.currentScrollPosition = scrollPosition.get();
	        this.leftPage = true;
	        var post = this.getPostById(this.posts, params.id);
	        post.render(template(post));
	    };
	    PostList.prototype.getPostById = function (list, id) {
	        var post;
	        list.forEach(function (maybePost) {
	            if (maybePost.id == id) {
	                post = maybePost;
	            }
	        });
	        return post;
	    };
	    return PostList;
	}(View));
	module.exports = PostList;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ApiConfig = __webpack_require__(16);
	var cache = __webpack_require__(24);
	var Api = (function () {
	    function Api(type) {
	        this.baseUrl = ApiConfig.APIURL + type;
	    }
	    Api.prototype.get = function (params, url) {
	        var key;
	        var result;
	        url = url || this.baseUrl;
	        url = this.addParams(params, url);
	        key = cache.generateKey(params, url);
	        // if (cache.api[key]) {
	        // 	result = cache.api[key];
	        // } else {
	        // 	result = fetch(url);
	        // 	cache.api[key] = result;
	        // }
	        result = fetch(url);
	        return result;
	    };
	    Api.prototype.addParams = function (params, url) {
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
	        this.render(this.template);
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
	    postList: {},
	    pages: {},
	    api: {},
	    categories: [],
	    index: 0,
	    generateKey: function (obj, url) {
	        var key;
	        var generatedKey = url + this.index;
	        for (key in obj) {
	            generatedKey += obj[key];
	        }
	        this.index += 1;
	        return generatedKey;
	    }
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PageApi = __webpack_require__(26);
	var Page = __webpack_require__(27);
	var View = __webpack_require__(18);
	var cache = __webpack_require__(24);
	var PostList = (function (_super) {
	    __extends(PostList, _super);
	    function PostList() {
	        _super.call(this);
	        this.template = '';
	        this.api = new PageApi();
	    }
	    PostList.prototype.getPage = function (params) {
	        var _this = this;
	        this.viewElem.classList.add('loader');
	        // check if page is in cache
	        if (params.id && cache.pages[params.id]) {
	            this.render(cache.pages[params.id]);
	        }
	        else {
	            // fetch posts by api
	            this.api.getPage(params)
	                .then(function (res) {
	                return res.json();
	            })
	                .then(function (res) {
	                _this.createPage(res);
	                _this.template = _this.applyTemplate(_this.page);
	                _this.render(_this.template);
	                _this.setCache();
	            });
	        }
	    };
	    PostList.prototype.createPage = function (rawPage) {
	        this.page = new Page({
	            id: rawPage.id,
	            title: rawPage.title.rendered,
	            content: rawPage.content.rendered,
	            image: rawPage.featured_media
	        });
	    };
	    PostList.prototype.setCache = function () {
	        // extend cache
	        if (this.template && this.page.id) {
	            cache.pages[this.page.id] = this.template;
	        }
	    };
	    PostList.prototype.applyTemplate = function (page) {
	        var template = "\n\t\t<div id=\"page_" + page.id + "\">\n\t\t\t<img src=\"" + page.image + "\" alt=\"\" />\n\t\t\t<div class=\"grid center\">\n\t\t\t\t<div class=\"col-5\">" + page.title + "</div>\n\t\t\t</div>\n\t\t\t<div class=\"grid center\">\n\t\t\t\t<div class=\"col-12\">" + page.content + "</div>\n\t\t\t</div>\n\t\t</div>\n\t\t";
	        return template;
	    };
	    return PostList;
	}(View));
	module.exports = PostList;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(20);
	var PageApi = (function (_super) {
	    __extends(PageApi, _super);
	    function PageApi() {
	        _super.call(this, 'pages');
	    }
	    PageApi.prototype.getPage = function (params) {
	        var restUrl;
	        if (params.id) {
	            restUrl = this.baseUrl + '/' + params.id.toString();
	            delete params.id;
	        }
	        return this.get(params, restUrl);
	    };
	    return PageApi;
	}(Api));
	module.exports = PageApi;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(18);
	var Page = (function (_super) {
	    __extends(Page, _super);
	    function Page(config) {
	        _super.call(this);
	        this.id = config && config.id || '';
	        this.title = config && config.title || '';
	        this.content = config && config.content || '';
	        this.image = config && config.image || '';
	    }
	    return Page;
	}(View));
	module.exports = Page;


/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports) {

	"use strict";
	var scrollPosition = {
	    get: function () {
	        return document.documentElement.scrollTop || document.body.scrollTop;
	    },
	    set: function (position) {
	        setTimeout(function () {
	            scrollTo(0, position);
	        }, 100);
	    }
	};
	module.exports = scrollPosition;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(20);
	var Category = __webpack_require__(31);
	var cache = __webpack_require__(24);
	var CategoryApi = (function (_super) {
	    __extends(CategoryApi, _super);
	    function CategoryApi() {
	        _super.call(this, 'categories');
	        this.categories = [];
	    }
	    CategoryApi.prototype.getCategories = function () {
	        return this.get({}, '');
	    };
	    CategoryApi.prototype.resolveCategories = function () {
	        var _this = this;
	        this.getCategories()
	            .then(function (res) {
	            return res.json();
	        })
	            .then(function (res) {
	            _this.createCategories(res);
	            cache.categories = _this.categories();
	        });
	    };
	    CategoryApi.prototype.createCategories = function (rawCategories) {
	        var _this = this;
	        rawCategories.forEach(function (rawCategory) {
	            _this.categories.push(new Category(rawCategories.id, rawCategories.name));
	        });
	    };
	    return CategoryApi;
	}(Api));
	module.exports = CategoryApi;


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	var Category = (function () {
	    function Category(id, title) {
	        this.id = id;
	        this.title = title;
	    }
	    return Category;
	}());
	module.exports = Category;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map