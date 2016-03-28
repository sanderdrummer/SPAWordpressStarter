import PageView = require('./pageView');

class PageFactory {
	pages: {}

	constructor() {
		this.pages = {};
	}

	getPageView(params) {
		
		var pageView;

		if( this.pages[params.id]) {
			return this.pages[params.id]
		} else {
			pageView = new PageView();
			this.pages[params.id] = pageView;
			return pageView;
		}
	}
}

export = PageFactory;