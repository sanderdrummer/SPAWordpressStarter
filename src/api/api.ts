import ApiConfig = require('./config');

class Api {
	baseUrl: string;

	constructor(type) {
		this.baseUrl = ApiConfig.APIURL + type;
	}

	get(params: Object, url:String) {
		url = url || this.baseUrl
		url = this.addParams(params);
		return fetch(url);
	}

	addParams(params: Object): String {

		var url = this.baseUrl;
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