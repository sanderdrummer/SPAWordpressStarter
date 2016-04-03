import PageApi = require('./pageApi');
import Page = require('./page');
import View = require('../view');

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

	getPage(params:Object) {

		this.viewElem.classList.add('loader');
		
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
					this.templateString = this.applyTemplate(this.page)
					this.render(this.templateString);
					this.setCache();
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
					<h1>${page.title}</h1>
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