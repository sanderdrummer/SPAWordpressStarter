import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import template = require('./postListTemplate');
import cache = require('../common/cache');

class PostList extends View{

	api: PostApi;
	template: string;
	posts: Post[];
	page: number;
	append: boolean;
	viewHeight: number;
	notDone: boolean;

	constructor() {
		super();
		this.page = 1;
		this.append = false;
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.notDone = true;

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
			this.render({
				template: cache.postList
			});

		} else {

			// extend params
			params = params || {};
			params.page = params.page || 1;

			// fetch posts by api
			this.api.getPosts(params)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					var config; 
					if (res.length) {
						this.createPostList(res);
						this.compose();
						config = {
							template: this.template,
							append: params.page > 1
						}
						this.render(config);
						this.setCache(config);
						this.viewHeight = this.getHeight();
					} else {
						this.notDone = false
					}
				});
		}
	}

	createPostList(rawPosts:Object[]) {
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
					excerpt: rawPost.excerpt.rendered,
					image: rawPost.featured_media
				});
			}

			index += 1;
		}
	}

	compose() {
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
		if (config.template) {
			cache.postList += config.template;
		
		// init cache
		} else if (config.append && config.template) {
			cache.postList = config.template;
		}
	}

	getSinglePost(params) {
		console.log(params, this.posts);
		var post = this.posts[params.id];
		post.render({
			template: template(post)
		});
	}
}

export = PostList;