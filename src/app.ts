declare function require(string): string;
require('../style/main.less');

import Router = require('./router/router');
import PostListFactory = require('./components/post/postListFactory');
import PageFactory = require('./components/page/pageFactory');
import HomeView = require('./components/homeView');
import CategoryApi = require('./components/category/categoryApi');

var postListFactory = new PostListFactory();
var pageFactory = new PageFactory();
var homeView = new HomeView();

// set default route to home if no route is present
if (!window.location.hash) {
    window.location.hash = '#/';
}

Router.register('/', ({}) => {
	onRouteChange(homeView);
	homeView.getHome();
});
Router.register('/posts', (params) => {
	params.category = 'all';
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
});
Router.register('/posts/:category', (params) => {
	var postList = postListFactory.getpostList(params);
	onRouteChange(postList);
	postList.getPosts(params);
});
Router.register('/post/:category/:id', (params) => {
	var postList = postListFactory.getpostList(params);
	postList.getSinglePost(params);
});
Router.register('/page/:id', (params) => {
	var pageView = pageFactory.getPageView(params);
	onRouteChange(pageView);
	pageView.getPage(params);
});

function onRouteChange(view) {
	pageFactory.resetActive();
	postListFactory.resetActive();
	view.active = true;
}