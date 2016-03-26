import PageApi = require('./pageApi');
import Page = require('./page');
import View = require('../view');
import cache = require('../common/cache');

class PostList extends View{

	api: PageApi;
	template: string;
	page: Page;

	constructor() {
		super();
		this.template = '';
		this.api = new PageApi();
	}

	getPage(params:Object) {
		
		// check if page is in cache
		if (params.id && cache.pages[params.id]) {
			this.render({
				template: cache.pages[params.id]
			});

		} else {

			// fetch posts by api
			this.api.getPage(params)
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					this.createPage(res);
					this.template = this.applyTemplate(this.page)
					this.render({
						template: this.template
					});
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
			cache.pages[this.page.id] = this.template;
		}
	}

	applyTemplate(page: Page) {
		var template = `
		<div id="page_${page.id}">
			<img src="${page.image}" alt="" />
			<div class="grid center">
				<div class="col-5">${page.title}</div>
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