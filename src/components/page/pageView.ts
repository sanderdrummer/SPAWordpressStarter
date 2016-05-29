import PageApi = require('./pageApi');
import Page = require('./page');
import View = require('../view');
import Param = require('../../router/param');
import eventBus = require('../../eventBus');


class PostList extends View{

	api: PageApi;
	templateString: string;
	page: Page;
	cache: string;

	constructor() {
		super();
		this.templateString = '';
		this.api = new PageApi();
	}

	getPage(params:Param) {

		// this.viewElem.classList.add('loader');
		eventBus.pageIsLoading(this);

		// check if page is in cache
		if (this.cache) {
			this.render(this.cache);

		} else {

			// fetch posts by api
			this.api.getPage(params)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					this.page = new Page(res);
					this.templateString = this.applyTemplate(this.page);
					this.render(this.templateString);
					this.setCache();
					eventBus.pageLoaded(this);
				});
		}

	}

	setCache() {

		// set cache
		if (this.templateString && this.page.id) {
			this.cache = this.templateString;
		}
	}

	applyTemplate(page: Page) {
		var template = `
		<div id="page_${page.id}" class="box">
			<div class="grid">
				<div class="col-12">
					<h2>${page.title}</h2>
					<img src="${page.image}" alt="" />
				</div>
			</div>
			<div class="grid center">
				<div class="col-12">${page.content}</div>
			</div>
		</div>
		`;
		return template;
	}

}

export = PostList;