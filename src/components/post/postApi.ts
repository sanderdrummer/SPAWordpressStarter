
import ApiConfig = require('../../api/config');

class PostApi {
	url: string;

	constructor() {
		this.url = ApiConfig.APIURL + 'posts';
	}

	getPosts() {
		return fetch(this.url);
	}
}

export = PostApi;