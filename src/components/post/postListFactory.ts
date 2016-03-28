import Factory = require('../../factory');
import PostList = require('./postList');

class PostListFactory extends Factory{

	constructor() {
		super();
	}

	getpostList(params) {

		var postList;

		if (this.collection[params.category]) {
			return this.collection[params.category]
		} else {
			postList = new PostList();
			this.collection[params.category] = postList;
			return postList;
		}
	}
}

export = PostListFactory;