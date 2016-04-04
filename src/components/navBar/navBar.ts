import Config = require('../../config');
import Route = require('./route');
import Router = require('./router');
import PostListFactory = require('../post/postListFactory');
import PageFactory = require('../page/pageFactory');
import StaticView = require('../staticPage/staticView');
import homeTemplate = require('../staticPage/homeTemplate');
import staticTemplate = require('../staticPage/staticTemplate');

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
		this.addRoutes(configs);

	}

	addRoutes(configs:any[]) {
		configs.forEach((config) => {
			this.router.routes.push(new Route(config))
		});
	}

	reset(){
		this.router.routes.forEach((route) =>{
			route.view.active = false;
		});
	}

	onRouteChange(route) {
		this.reset();
        if (route && route.view && route.view[route.callback]) {
            route.view.active = true;
            route.view[route.callback](route.params);
        } else {
            console.log(404);
        }
	}

	handleHashChange() {
		this.router.handleHashChange();
		this.onRouteChange(this.router.activeRoute);
	}
}

export = NavBar;