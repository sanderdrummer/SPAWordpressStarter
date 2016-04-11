import Config = require('../config');
import cache = require('../components/common/cache');

class Api {
	baseUrl: string;
	cache: {};

	constructor(type) {
		this.baseUrl = Config.APIURL + type;
		this.cache = {};
	}

	get(params: Object, url:string) {
		var key;
		var result;

		url = url || this.baseUrl;
		url = this.addParams(params, url);

		key = cache.generateKey(params, url);

		if (this.cache[key]) {

			result = new Promise(function(resolve){
				resolve(this.cache[key])
			});

		} else {
			result = fetch(url).then((res) => {
				return res.json();
			});

		}

		return result;

	}

	addParams(params: Object, url:string): string {

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