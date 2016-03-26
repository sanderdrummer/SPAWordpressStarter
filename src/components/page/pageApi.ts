
import Api = require('../../api/api');

class PageApi extends Api{

	constructor() {
		super('pages')
	}

	getPage(params:Object) {
		
		var restUrl;
		if (params.id) {
			restUrl = this.baseUrl + '/' + params.id.toString();
			delete params.id
		}

		return this.get(params, restUrl);
	}
}

export = PageApi;