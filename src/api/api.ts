import Config = require('../config');
import cache = require('../components/common/cache');

class Api {
	baseUrl: string;

	constructor(type) {
		this.baseUrl = Config.APIURL + type;
	}

	get(params: Object, url:string) {
		var key;
		var result;

		url = url || this.baseUrl
		url = this.addParams(params, url);

		key = cache.generateKey(params, url);
		
		result = fetch(url);

		return result;

	}

	addParams(params: Object, url:String): string {

		var seperator = '?';
		var key;

		for (key in params) {
			if (key && params[key]) {
				url += seperator + key +
					'=' + params[key];
				seperator = '&';
			}
		}

		return url;
	}
}

export = Api;