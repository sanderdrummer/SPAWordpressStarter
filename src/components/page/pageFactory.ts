import Factory = require('../../factory');
import PageView = require('./pageView');

class PageFactory extends Factory {

	constructor() {
		super();
	}

	getPageView(params) {
		
		var pageView;

		if( this.collection[params.id]) {
			return this.collection[params.id]
		} else {
			pageView = new PageView();
			this.collection[params.id] = pageView;
			return pageView;
		}
	}
}

export = PageFactory;