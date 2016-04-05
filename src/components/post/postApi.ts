
import Api = require('../../api/api');
import Param = require('../../router/param');

class PostApi extends Api{

	constructor() {
		super('posts')
	}

	getPosts(params:Param) {

		var url = '';

		if (params.category && params.category != 'all') {
			params['filter[category_name]'] = params.category;
		}

		return this.get(params, url);
	}
}

export = PostApi;