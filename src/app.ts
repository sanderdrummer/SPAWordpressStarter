declare function require(string): string;
require('../style/main.less');

import Router = require('./router/router');
import PostListFactory = require('./components/post/postListFactory');
import PageFactory = require('./components/page/pageFactory');
import StaticView = require('./components/staticPage/staticView');
import homeTemplate = require('./components/staticPage/homeTemplate');
import staticTemplate = require('./components/staticPage/staticTemplate');
import CategoryApi = require('./components/category/categoryApi');


var postListFactory = new PostListFactory();
var pageFactory = new PageFactory();
var homeView = new StaticView(homeTemplate);
var staticView = new StaticView(staticTemplate);
var router = new Router();

var categorieApi = new CategoryApi();

if (!window.location.hash) {

	window.location.hash = '#/';
}
router.register('/', (params) => {
	onRouteChange(homeView);
	homeView.getPage();
})
.register('/static', (params) => {
	var postList = postListFactory.getpostList(params);
	onRouteChange(staticView);
	staticView.getPage();
}).register('/posts', (params) => {
	params.category = 'all';
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
})
.register('/posts/:category', (params) => {
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
})
.register('/post/:category/:id', (params) => {
	var postList = postListFactory.getpostList(params);
	postList.getSinglePost(params);
})
.register('/page/:id', (params) => {
	var pageView = pageFactory.getPageView(params);
	onRouteChange(pageView);
	pageView.getPage(params);
});

function onRouteChange(view) {
	pageFactory.resetActive();
	postListFactory.resetActive();
	view.active = true;
}