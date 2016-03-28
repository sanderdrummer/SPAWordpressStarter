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
	var Router = __webpack_require__(1);
	var PostListFactory = __webpack_require__(3);
	var PageFactory = __webpack_require__(13);
	var HomeView = __webpack_require__(17);
	var CategoryApi = __webpack_require__(18);
	var postListFactory = new PostListFactory();
	var pageFactory = new PageFactory();
	var homeView = new HomeView();
	var categorieApi = new CategoryApi();
	categorieApi.getCategories();
	Router.register('/', function (params) {
	    homeView.getHome();
	});
	Router.register('/posts', function (params) {
	    params.category = 'all';
	    var postList = postListFactory.getpostList(params);
	    postList.getPosts(params);
	});
	Router.register('/posts/:category', function (params) {
	    var postList = postListFactory.getpostList(params);
	    postList.getPosts(params);
	});
	Router.register('/post/:category/:id', function (params) {
	    var postList = postListFactory.getpostList(params);
	    postList.getSinglePost(params);
	});
	Router.register('/page/:id', function (params) {
	    var pageView = pageFactory.getPageView(params);
	    pageView.getPage(params);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var _this = this;
	var Route = __webpack_require__(2);
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
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PostList = __webpack_require__(4);
	var PostListFactory = (function () {
	    function PostListFactory() {
	        this.postLists = {};
	    }
	    PostListFactory.prototype.getpostList = function (params) {
	        var postList;
	        if (this.postLists[params.category]) {
	            return this.postLists[params.category];
	        }
	        else {
	            postList = new PostList();
	            this.postLists[params.category] = postList;
	            return postList;
	        }
	    };
	    return PostListFactory;
	}());
	module.exports = PostListFactory;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PostApi = __webpack_require__(5);
	var Post = __webpack_require__(9);
	var View = __webpack_require__(10);
	var template = __webpack_require__(11);
	var scrollPosition = __webpack_require__(12);
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
	        if (this.cache && !this.notDone) {
	            this.render(this.cache);
	        }
	        else {
	            this.fetchPostsByApi(params);
	        }
	        if (this.leftPage) {
	            scrollPosition.set(this.currentScrollPosition);
	            this.leftPage = false;
	        }
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
	                _this.compose(_this.params.category);
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
	    PostList.prototype.compose = function (category) {
	        this.sortList();
	        this.template = this.posts.map(function (post) {
	            return template(post, category);
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
	            this.cache = template;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(6);
	var PostApi = (function (_super) {
	    __extends(PostApi, _super);
	    function PostApi() {
	        _super.call(this, 'posts');
	    }
	    PostApi.prototype.getPosts = function (params) {
	        var url = '';
	        if (params.category && params.category != 'all') {
	            params['filter[category_name]'] = params.category;
	        }
	        return this.get(params, url);
	    };
	    return PostApi;
	}(Api));
	module.exports = PostApi;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ApiConfig = __webpack_require__(7);
	var cache = __webpack_require__(8);
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
/* 7 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	    BASEURL: 'http://localhost/wordpress/',
	    APIURL: '/wordpress/wp-json/wp/v2/',
	    VIEWELEM: 'view'
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	    postList: '',
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(10);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Config = __webpack_require__(7);
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
/* 11 */
/***/ function(module, exports) {

	"use strict";
	module.exports = function applyTemplate(post, category) {
	    var template = "\n\t<div id=\"post_" + post.id + "\">\n\t\t<div class=\"grid center\">\n\t\t\t<div class=\"col-5\"><a href=\"#/post/" + category + "/" + post.id + "\">" + post.title + "</a> </div>\n\t\t</div>\n\t\t<div class=\"grid center\">\n\t\t\t<div class=\"col-5\">" + post.excerpt + "</div>\n\t\t\t<div class=\"col-5 hidden\">" + post.content + "</div>\n\t\t</div>\n\t</div>\n\t";
	    return template;
	};


/***/ },
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PageView = __webpack_require__(14);
	var PageFactory = (function () {
	    function PageFactory() {
	        this.pages = {};
	    }
	    PageFactory.prototype.getPageView = function (params) {
	        var pageView;
	        if (this.pages[params.id]) {
	            return this.pages[params.id];
	        }
	        else {
	            pageView = new PageView();
	            this.pages[params.id] = pageView;
	            return pageView;
	        }
	    };
	    return PageFactory;
	}());
	module.exports = PageFactory;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var PageApi = __webpack_require__(15);
	var Page = __webpack_require__(16);
	var View = __webpack_require__(10);
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
	        if (this.cache) {
	            this.render(this.cache);
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
	            this.cache = this.template;
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(6);
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(10);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var View = __webpack_require__(10);
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Api = __webpack_require__(6);
	var Category = __webpack_require__(19);
	var cache = __webpack_require__(8);
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
/* 19 */
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