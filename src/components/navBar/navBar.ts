import Config = require('../../config');
import Route = require('./route');
import Router = require('./router');

class NavBar {

	router: Router;
	elem: Element;
	postListFactory: PostListFactory;
	pageFactory: PageFactory;

	constructor(configs: any[]) {
		this.elem = document.getElementById(Config.NAVELEM);
		this.postListFactory = new PostListFactory();
		this.pageFactory = new PageFactory();
		this.router = new Router();
	}

}

export = NavBar;