import ApiConfig = require('./config');

class Api {
	baseUrl: string;

	constructor(type) {
		this.baseUrl = ApiConfig.APIURL + type;
	}

	get(params: Object, url:String) {
		url = url || this.baseUrl
		url = this.addParams(params, url);

		return fetch(url);
	}

	addParams(params: Object, url:String): String {

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