import PostApi = require('./postApi');
import Post = require('./post');
import View = require('../view');
import template = require('./postListTemplate');

class PostList extends View{

	api: PostApi;
	template: string;
	posts: Post[];
	page: number;
	append: boolean;

	constructor() {
		super();
		this.page = 1;
		this.append = false;
		this.template = '';
		this.posts = [];
		this.api = new PostApi();

	}

	getPosts(params:Object) {
		
		params = params || {};
		params = { 
			page: 2,
			test: 2
		};

		// fetch posts by api
		this.api.getPosts(params)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.createPostList(res);
				this.compose();
				this.render({ 
					template: this.template 
				});
			});
	}

	createPostList(rawPosts:Object[]) {
		
		var index = 0;
		var length = rawPosts.length;
		var rawPost;

		this.posts = [];

		while (index < length) {
			rawPost = rawPosts[index];
			
			if (rawPost) {
				this.posts[rawPost.id] = new Post({
					id: rawPost.id,
					title: rawPost.title.rendere,
					content: rawPost.content.rendered,
					excerpt: rawPost.excerpt.rendered
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
}

export = PostList;