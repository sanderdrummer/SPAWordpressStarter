
import Api = require('../../api/api');
import Param = require('../../router/param');

class PageApi extends Api{

	constructor() {
		super('pages')
	}

	getPage(params:Param) {
		
		var restUrl;
		if (params.id) {
			restUrl = this.baseUrl + '/' + params.id.toString();
			delete params.id
		}

		return this.get(params, restUrl);
	}
}

export = PageApi;