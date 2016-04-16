declare function fetch(any):any;


import Config = require('../config');

class Api {
	baseUrl: string;
	cache: {};

	constructor(type) {
		this.baseUrl = Config.APIURL + type;
		this.cache = {};
	}

	get(params: Object, url:string) {
		var result;

		url = url || this.baseUrl;
		url = Api.addParams(params, url);

        result = fetch(url);

		return result;

	}

	static addParams(params: Object, url:string): string {

		var separator = '?';
		var key;

		for (key in params) {
			if (key && params[key]) {
				url += separator + key +
					'=' + params[key];
				separator = '&';
			}
		}

		return url;
	}
}

export = Api;