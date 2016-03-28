import PageApi = require('./pageApi');
import Page = require('./page');
import View = require('../view');

class PostList extends View{

	api: PageApi;
	template: string;
	page: Page;
	cache: string;
	active: boolean;

	constructor() {
		super();
		this.template = '';
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
					this.createPage(res);
					this.template = this.applyTemplate(this.page)
					this.render(this.template);
					this.setCache();
				});
		}

	}

	createPage(rawPage: Object) {
		this.page = new Page({
			id: rawPage.id,
			title: rawPage.title.rendered,
			content: rawPage.content.rendered,
			image: rawPage.featured_media
		});
	}

	setCache() {
		// extend cache
		if (this.template && this.page.id) {
			this.cache = this.template;
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