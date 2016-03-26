
import Api = require('../../api/api');

class PostApi extends Api{

	constructor() {
		super('posts')
	}

	getPosts(params:Object) {
		return this.get(params, '');
	}
}

export = PostApi;