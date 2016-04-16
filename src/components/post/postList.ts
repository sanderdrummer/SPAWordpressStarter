import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import template = require('./postListTemplate');
import postTemplate = require('./postTemplate');
import scrollPosition = require('../../services/scroll/scrollPosition');
import Param = require('../../router/param');

class PostList extends View{

	api: PostApi;
	templateCache: string;
	template: string;
	posts: Post[];
	filteredPosts: Post[];
	pageCache: {};
	params: Param;
	page: number;
	viewHeight: number;
	currentScrollPosition: number;
	leftPage: boolean;
	notDone: boolean;
	active: boolean;

	constructor() {
		super();
		this.page = 1;
		this.pageCache = {};
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.notDone = true;
		this.leftPage = true;
		this.params = new Param({});
		this.currentScrollPosition = scrollPosition.get();

		document.addEventListener('scroll', () => {
			if (this.notDone && 
				this.active &&
				this.viewHeight / 2 < window.pageYOffset) {
				this.appendOnScroll(this.params);
			}
		});
	}

	getPosts(params:Param) {
		this.params = params;

		if (this.leftPage) {
			this.viewElem.classList.add('loader');
		}

		// Check if posts are already in cache
		if (this.templateCache && !this.notDone) {
			this.render(this.templateCache);

		} else {
			this.getPostsBy(params);
		}

		if (this.leftPage) {
			scrollPosition.set(this.currentScrollPosition);
			this.leftPage = false;
		}

	}

	getPostsBy(params:Param) {

		// extend params
		params = params || new Param({});
		params.page = params.page || 1;

		var key = params.getCacheKey();
		if (this.pageCache[key]) {
			this.posts = this.pageCache[key];
			this.processTemplate();
		} else {
			this.fetchPostsByApi(params);
		}
	}

	processTemplate() {
		this.compose(this.params.category);
		this.render(this.template);
		this.setTemplateCache(this.template);
		this.viewHeight = this.getHeight();
	}


	fetchPostsByApi(params:Param) {

		var key = params.getCacheKey();

		// fetch posts by api
		this.api.getPosts(params)
			.then((res) => {
				return res.json();
			})
			.then((res) => {

				if (res.length) {
					this.createPostList(res);
					this.processTemplate();
					this.pageCache[key] = this.posts;
				} else {
					this.notDone = false
				}
			});
	}

	createPostList(rawPosts:Object[]) {
		var index = 0;
		var length = rawPosts.length;
		var rawPost;

		while (index < length) {
			rawPost = rawPosts[index];
			if (rawPost && 
				!this.getPostById(this.posts, rawPost.id)) {
				this.posts.push(new Post(rawPost));
			}

			index += 1;
		}
	}

	sortList() {
		this.posts.sort((a,b) => {
			return b.id - a.id;
		});
	}

	compose(category) {
		this.sortList();
		this.template = this.posts.map(post => {
			return template(post, category);
		}).join('');
	}

	appendOnScroll(params) {
		this.page += 1;
		params.page = this.page;
		this.getPosts(params);
	}

	filterPosts(filterVar) {
		console.log(filterVar);
	}

	setTemplateCache(template) {

		// extend cache
		if (template && !this.notDone) {
			this.templateCache = template;
		}
	}

	getSinglePost(params:Param) {
		this.currentScrollPosition = scrollPosition.get();
		this.leftPage = true;
		var post = this.getPostById(this.posts, params.id);
		post.render(postTemplate(post, params.category));
		scrollPosition.set(0);

	}

	getPostById(list, id) {
		var post:Post;

		list.forEach((maybePost: Post) => {
			if (maybePost.id == id) {
				post = maybePost;
			}
		});

		return post;
	}
}

export = PostList;