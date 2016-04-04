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
	router: Router;
	elem: Element;
	postListFactory: PostListFactory;
	pageFactory: PageFactory;

	constructor(configs: any[]) {
		this.elem = document.getElementById(Config.NAVELEM);
		this.postListFactory = new PostListFactory();
		this.pageFactory = new PageFactory();
		this.router = new Router();
		this.bootstrap(configs);

        // Adds global eventlistener for routing on hashchange
        window.addEventListener('hashchange', () => {
            this.handleHashChange();
        });

        // Special case load handle Hashchange on startup
        document.addEventListener("DOMContentLoaded", () => {
            this.handleHashChange();
        });
	}

	bootstrap(configs:any[]) {
		this.addRoutes(configs)

	}

	addRoutes(configs:any[]) {
		configs.forEach((config) => {
			this.routes.push(new Route(config))
		});
	}

	reset(){
		this.routes.forEach((route) =>{
			route.view.active = false;
		});
	}

	onRouteChange(route) {
		this.reset();
		route.view.active = true;
		route.callback(route.params);
	}

	handleHashChange() {
		this.router.handleHashChange();
		this.onRouteChange(this.router.activeRoute);
	}
}

export = NavBar;