import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import template = require('./postListTemplate');
import cache = require('../common/cache');
import scrollPosition = require('../../services/scroll/scrollPosition');

class PostList extends View{

	api: PostApi;
	template: string;
	posts: Post[];
	page: number;
	viewHeight: number;
	currentScrollPosition: number;
	leftPage: boolean;
	notDone: boolean;

	constructor() {
		super();
		this.page = 1;
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.notDone = true;
		this.leftPage = false;
		this.currentScrollPosition = scrollPosition.get();

		document.addEventListener('scroll', () => {
			if (this.notDone && 
				this.viewHeight / 2 < window.pageYOffset) {
				this.appendOnScroll();
			}
		});
	}

	getPosts(params:Object) {

		// check if posts are already in cache
		if (cache.postList && !this.notDone) {
			this.render(cache.postList);

		} else {
			this.fetchPostsByApi(params);
		}

		if (this.leftPage) {
			scrollPosition.set(this.currentScrollPosition);
			this.leftPage = false;
		}

	}

	fetchPostsByApi(params: Object) {

		// extend params
		params = params || {};
		params.page = params.page || 1;

		// fetch posts by api
		this.api.getPosts(params)
			.then((res) => {
				return res.json();
			})
			.then((res) => {

				if (res.length) {
					this.createPostList(res);
					this.compose();
					this.render(this.template);
					this.setCache(this.template);
					this.viewHeight = this.getHeight();

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
	}

	sortList() {
		this.posts.sort((a,b) => {
			return b.id - a.id;
		});
	}

	compose() {
		this.sortList();
		this.template = this.posts.map(post => {
			return template(post);
		}).join('');
	}

	appendOnScroll() {
		this.page += 1;
		this.getPosts({page:this.page});
	}

	setCache(config) {
		// extend cache
		if (template && !this.notDone) {
			cache.postList = config.template;
		}		
	}

	getSinglePost(params) {
		this.currentScrollPosition = scrollPosition.get();
		this.leftPage = true;
		var post = this.getPostById(this.posts, params.id);
		post.render(template(post));
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