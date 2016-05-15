
import Api = require('../../api/api');
import Param = require('../../router/param');
import Config = require('../../config');

class PostApi extends Api{


	constructor() {
		super('posts');
	}

	getPosts(params:Param) {

		var url = '';
		console.log(params);
		if (params.category && params.category != 'all') {
			params['filter[category_name]'] = params.category;
		}

		return this.get(params, url);
	}

	getPost(params:Param) {
		return fetch(Config.APIURL + 'posts/' + params.id);
	}
}

export = PostApi;