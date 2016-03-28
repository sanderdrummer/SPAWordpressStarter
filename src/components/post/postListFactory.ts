import PostList = require('./postList');

class PostListFactory {
	postLists: {}

	constructor() {
		this.postLists = {};
	}

	getpostList(params) {

		var postList;

		if (this.postLists[params.category]) {
			return this.postLists[params.category]
		} else {
			postList = new PostList();
			this.postLists[params.category] = postList;
			return postList;
		}
	}
}

export = PostListFactory;