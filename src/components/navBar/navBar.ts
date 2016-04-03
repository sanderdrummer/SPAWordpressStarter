import Config = require('../../config');
import Route = require('./route');
import Router = require('./router');
import PostListFactory = require('../post/postListFactory');
import PageFactory = require('../page/pageFactory');
import StaticView = require('../staticPage/staticView');
import homeTemplate = require('../staticPage/homeTemplate');
import staticTemplate = require('../staticPage/staticTemplate');

class NavBar {

	routes: Route[];
	elem: Element;
	postListFactory: PostListFactory;
	pageFactory: PageFactory;

	constructor(){
		this.elem = document.getElementById(Config.NAVELEM);
		this.postListFactory = new PostListFactory();
		this.pageFactory = new PageFactory();
	}

	bootstrap(configs:any[]) {
		this.addRoutes(configs)

	}

	addRoutes(configs:any[]) {
		configs.forEach((config) => {
			this.routes.push(new Route(config))
		});
	}

	onRouteChange(view) {
		this.pageFactory.resetActive();
		this.postListFactory.resetActive();
		view.active = true;
	}
}

export = NavBar;