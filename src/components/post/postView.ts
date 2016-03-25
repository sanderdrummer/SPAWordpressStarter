import PostApi = require('./postApi');
import Post = require('./post');

var template = `
<div class="grid center">
	<div class="col-5">${this.title}</div>
</div>
<div class="grid center">
	<div class="col-5">${this.excerpt}</div>
	<div class="col-5">${this.content}</div>
</div>
`

class PostView {

	api: PostApi;
	template: string;
	posts: Post[];


	constructor(config: any) {
		this.template = '';
		this.posts = [];
		this.api = new PostApi();
		this.view = document.getElementById('view');

	}

	render() {

		// get posts
		this.api.getPosts()
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				this.createPostList(res);
				this.compile();
			});
	}

	createPostList(rawPosts:Array<Object>) {
		
		var index = 0;
		var length = rawPosts.length;
		var rawPost;

		this.posts = [];

		while (index < length) {
			rawPost = rawPosts[index];
			
			if (rawPost) {
				this.posts.push(new Post({
					title: rawPost.title.rendered;
					content: rawPost.content.rendered;
					excerpt: rawPost.excerpt.rendered;
				}));
			}

			index += 1;
		}
	}

	compile() {

		var index = 0;
		var length = this.posts.length;

		while (index < length) {
			console.log(index);
			this.template += this.applyTemplate(this.posts[index]);

			index += 1;
		}
		this.view.innerHTML = this.template;
	}

	applyTemplate(post:Post) {
		return `
			<div class="grid center">
				<div class="col-5">${post.title}</div>
			</div>
			<div class="grid center">
				<div class="col-5">${post.excerpt}</div>
				<div class="col-5">${post.content}</div>
			</div>
			`
	}
}

export = PostView;